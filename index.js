const fetchingData = require("./src/fetch_data");

const express = require("express");
const app = express();
const body_parser = require("body-parser");

// Middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

// Route
app.route("/temukan").get(async (req, res, next) => {
  res.status(200);
  let results = await fetchingData.getData(
    "/discover/movie?region=ID&language=id"
  );
  res.send(results.data["results"]);
  res.end();
});

app.route("/temukan/:page").get(async (req, res) => {
  fetchingData
    .getData(`/discover/movie?region=ID&language=id&page=${req.params.page}`)
    .then((value) => {
      res.status(200);
      res.json({
        status: true,
        pesan: "Sukses",
        hasil: value.data["results"],
      });
      res.end();
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: false,
        pesan: "Terjadi masalah silahkan coba lagi",
      });
      res.end();
    });
});

app.listen(8000, "127.0.0.1", () => console.log("Running on port 8000"));
