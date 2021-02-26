const express = require("express");
const app = express();
const body_parser = require("body-parser");
const http = require("http");

// Middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

// Route
app.route("/name").get(function (req, res, next) {
  res.status(200);

  res.send({
    status: true,
    message:,
    results: [
      { firstName: "Josh", lastName: "Wich" },
      { firstName: "Josh", lastName: "Witch" },
    ],
  });

  res.end();
});

app.listen(8000, "127.0.0.1", () => console.log("Running on port 8000"));
