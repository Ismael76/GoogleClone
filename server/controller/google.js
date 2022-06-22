const express = require("express");

const google = express();

const data = require("../data/data");

google.get("/", (req, res) => {
  res.send(data);
});

module.exports = google;
