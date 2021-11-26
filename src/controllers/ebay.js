// ebay.js
//imports
require("dotenv").config();
const axios = require("axios");


exports.findItems = function(req, res) {

    let url = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=" +process.env.ebayKey + "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&paginationInput.entriesPerPage=5&keywords=base%20charizard";

    axios.get(url)
        .then((response) => {
            let responsearray =[]
            for (let i = 0; i < 5; i++) {
                responsearray.push(response.data.findItemsByKeywordsResponse[0].searchResult[0].item[i]);
            }
            let sendarray = []
            for (let i = 0; i < 5; i++) {
                let x = {
                    'image': responsearray[i].galleryURL,
                    'title': responsearray[i].title,
                    'url' : responsearray[i].viewItemURL,
                    'price': responsearray[i].sellingStatus[0].currentPrice[0].__value__
                }
                sendarray.push(x)
            }
            return res.json(sendarray)
        }, (error) => {
            console.log(error);
        });
}