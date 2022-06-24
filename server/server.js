const express = require("express");

const app = express();

const googleRouter = require("./controller/google");

const cors = require("cors");

let searchData = [];

app.use(cors());

app.use(express.json());

app.post("/google", (req, res) => {
  const data = req.body;
  searchData[0] = data.value;
});

app.get("/google", (req, res) => {
  fetch(
    `https://serpapi.com/search.json?engine=google&q=${searchData[0]}&api_key=dd2d804ca1d1130b2e16b7b5efbf3c8743660da18922f656cf0782c0a812b431`
  )
    .then((res) => res.json())
    .then((data) => res.send(data));
});

app.use("/search", googleRouter);

module.exports = app;
