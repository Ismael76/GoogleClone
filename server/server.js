const express = require("express");

const app = express();

const googleRouter = require("./controller/google");

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/search", googleRouter);

module.exports = app;
