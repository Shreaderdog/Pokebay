// cards.js
// imports
const pokemon = require('pokemontcgsdk');
require("dotenv").config();

// set api key
pokemon.configure({apiKey: process.env.pokemonKey});

exports.search = function(req, res) {
    let qstring = "";
    if (req.body.searchquery.name != "") {
       qstring = qstring.concat("name:", req.body.searchquery.name, "* ");
    }
    if (req.body.searchquery.type != "") {
       qstring = qstring.concat("types:", req.body.searchquery.type, " ");
    }
    if(req.body.searchquery.set != "") {
        qstring = qstring.concat("set.name:", req.body.searchquery.set);
    }
    pokemon.card.where({q: `${qstring}`, pageSize: 12, page: 1 })
        .then(result => {
            return res.json(result);
        }
    )
}

exports.getTypes = function(req, res) {
    pokemon.type.all()
        .then(result => {
            return res.json(result);
        }
    )
}

exports.getSets = function(req, res) {
    pokemon.set.all()
        .then((sets) => {
            return res.json(sets);
        }
    )
}