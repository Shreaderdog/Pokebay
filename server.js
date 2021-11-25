// server.js
// imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// self-made imports
const cardRouter = require("./src/routes/cards.js");
const ebayRouter = require("./src/routes/ebay.js");

// initialize app
const app = express();

// request parsing
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// cors is required
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// create routes
app.use("/cards", cardRouter);
app.use("/ebay", ebayRouter);

// start listening for connections
app.listen(process.env.PORT, () => console.log(`Server Listening on ${process.env.PORT}`));