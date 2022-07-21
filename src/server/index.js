var path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

dotenv.config();

var textapi = new meaningCloud({
  application_key: process.env.API_KEY,
});

const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
