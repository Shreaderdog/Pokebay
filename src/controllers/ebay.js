// ebay.js
//imports
require("dotenv").config();
const axios = require("axios");


exports.findItems = function(req, res) {

    let set = req.body.set;
    let name = req.body.name;

    set = set.replace("é", "e");
    name = name.replace("δ", "delta");
    set = set.replace("—", " ");
    name = name.replace("—", " ");
    set = set.replace("&", "and");
    name = name.replace("&", "and");

    let url = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=" +process.env.ebayKey + "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=5&keywords="+set+"%20"+name;

    axios.get(url)
        .then((response) => {
            let responsearray =[]
            let totalresponse = response.data.findItemsByKeywordsResponse[0].searchResult[0];
            totalresponse = (totalresponse['@count']);
            for (let i = 0; i < 5; i++) {
                responsearray.push(response.data.findItemsByKeywordsResponse[0].searchResult[0].item[i]);
            }
            let sendarray = []
            for (let i = 0; i < totalresponse; i++) {
                let x = {
                    image: responsearray[i].galleryURL[0],
                    title: responsearray[i].title[0],
                    url : responsearray[i].viewItemURL[0],
                    price: responsearray[i].sellingStatus[0].currentPrice[0].__value__
                }
                sendarray.push(x)
            }
            return res.json(sendarray)
        }, (error) => {
            let errtext = "An error ocurrec. Try again later or try another card";
            let errordata = {
                error: error,
                errtext: errtext
            }
            res.send(errordata);
        });
}