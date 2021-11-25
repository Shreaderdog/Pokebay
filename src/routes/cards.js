// cards.js
// imports
const express = require("express");
const router = express.Router();

//self-made imports
const cardController = require("../controllers/cards.js");

router.get("/search", cardController.search);

module.exports = router;