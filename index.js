const fetchData = require("./src/fetch_data");

const express = require("express");
const app = express();
const body_parser = require("body-parser");

// Middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

// Route
app.route("/temukan").get(function (req, res, next) {
  res.status(200);
  let data = fetchData.fetchData;
  console.log(data);
  res.end();
});

app.listen(8000, "127.0.0.1", () => console.log("Running on port 8000"));
