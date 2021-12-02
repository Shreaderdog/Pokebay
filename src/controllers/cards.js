// cards.js
// imports
const pokemon = require('pokemontcgsdk');
require("dotenv").config();

// set api key
pokemon.configure({apiKey: process.env.pokemonKey});

exports.search = function(req, res) {
    let qstring = "";
    console.log(req.body)
    if (req.body.name) {
       qstring = qstring.concat("name:", req.body.name, "* ");
    }
    if (req.body.type) {
       qstring = qstring.concat("types:", req.body.type, " ");
    }
    if(req.body.set) {
        qstring = qstring.concat("set.name:", req.body.set);
    }
    if(req.body.supertype) {
        qstring = qstring.concat("supertype:", req.body.supertype);
    }
    pokemon.card.where({q: `${qstring}`, pageSize: 12, page: 1 })
        .then(result => {
            let response = {};
            if(result.count == 0) {
                response = {
                    error: `No card found to match ${req.body.name} in selected set`
                }
            } else {
                let cards = [];
                for (var i = 0; i < result.count; i++) {
                    let y = "unlisted";
                    if(result.data[i].tcgplayer.prices.normal) {
                        y = result.data[i].tcgplayer.prices.normal.mid
                    } else if(result.data[i].tcgplayer.prices.holofoil) {
                        y = result.data[i].tcgplayer.prices.holofoil.mid
                    } else if(result.data[i].tcgplayer.prices.reverseHolofoil) {
                        y = result.data[i].tcgplayer.prices.reverseHolofoil.mid
                    }
                    let x = {
                        name: result.data[i].name,
                        type: result.data[i].types,
                        hp: result.data[i].hp,
                        setname: result.data[i].set.name,
                        tcgplayerprice: y,
                        tcglink: result.data[i].tcgplayer.url,
                        image: result.data[i].images.small
                    }
                    cards = [...cards, x];
                }
                response = {
                    cards: cards
                }
            }
            res.send(response);
        }
    )
}

exports.getTypes = function(req, res) {
    pokemon.type.all()
        .then(result => {
            res.send(result);
        }
    )
}

exports.getSets = function(req, res) {
    pokemon.set.all()
        .then((sets) => {
            let setnames = [];
            for(var i = 0; i < sets.length; i++) {
                if (i != 110){
                    setnames = [...setnames, sets[i].name];
                }
            }
            res.send(setnames);
        }
    )
}

exports.getSuperTypes = function(req, res) {
    pokemon.supertype.all()
        .then((supertypes) => {
            res.send(supertypes);
        })
}