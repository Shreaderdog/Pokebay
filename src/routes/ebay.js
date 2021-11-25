// ebay.js
// imports
const express = require("express");
const router = express.Router();

//self-made imports
const ebayController = require("../controllers/ebay.js");

router.get("/ebayFind", ebayController.findItems);

module.exports = router;