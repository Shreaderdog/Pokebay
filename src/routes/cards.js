// cards.js
// imports
const express = require("express");
const router = express.Router();

//self-made imports
const cardController = require("../controllers/cards.js");

router.post("/search", cardController.search);
router.get("/getTypes", cardController.getTypes);
router.get("/getSets", cardController.getSets);
router.get("/getSuperTypes", cardController.getSuperTypes);

module.exports = router;