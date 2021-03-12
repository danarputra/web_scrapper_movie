// Import any Model
const MovieModel = require("./model/MovieModel");
const GenreModel = require("./model/GenreModel");

const { getData, postData } = require("./src/fetch_data");

const express = require("express");
const app = express();
const body_parser = require("body-parser");

// Middleware
app.use(express.static("public"));
app.set("views", "./views");
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

// Route
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log(__dirname);
  res.sendFile(__dirname + "/views/index.html");
});

app.route("/temukan").get((req, res) => {
  getData("/discover/movie?region=ID&language=id")
    .then((result) => {
      res
        .status(200)
        .header("Content-Type : application.json")
        .json({
          status: true,
          pesan: "Sukses",
          hasil: result.data["results"].map((data) =>
            MovieModel.jsonToModel(data)
          ),
        })
        .end();
    })
    .catch((err) => {
      res
        .status(404)
        .header("Content-Type : application.json")
        .json({
          kode: res.statusCode,
          status: false,
          pesan: "Terjadi kesalahan / data tidak ada",
        })
        .end();
    });
});

app.route("/jenis").get((req, res) => {
  getData("/genre/movie/list?language=ID")
    .then((result) => {
      res
        .status(200)
        .header("Content-Type : application.json")
        .json({
          status: true,
          pesan: "Sukses",
          hasil: result.data["genres"].map((data) =>
            GenreModel.jsonToModel(data)
          ),
        })
        .end();
    })
    .catch((err) => {
      res
        .status(404)
        .header("Content-Type : application.json")
        .json({
          kode: res.statusCode,
          status: false,
          pesan: "Terjadi kesalahan / data tidak ada",
        })
        .end();
    });
});

app.route("/koleksi/:id").get((req, res) => {
  fetchingData
    .getData(`/collection/${req.params.id}?language=ID`)
    .then((value) => {
      res.status(200);
      res.header("Content-Type : application.json");
      res.json({
        status: true,
        pesan: "Sukses",
        hasil: value.data,
      });
      res.end();
    })
    .catch((err) => {
      res
        .status(404)
        .header("Content-Type : application.json")
        .json({
          kode: res.statusCode,
          status: false,
          pesan: "Terjadi kesalahan / data tidak ada",
        })
        .end();
    });
});

app.route("/temukan/:page").get((req, res) => {
  fetchingData
    .getData(`/discover/movie?region=ID&language=id&page=${req.params.page}`)
    .then((value) => {
      res
        .status(200)
        .header("Content-Type : application.json")
        .json({
          status: true,
          pesan: "Sukses",
          hasil: value.data["results"],
        })
        .end();
    })
    .catch((err) => {
      res
        .status(404)
        .header("Content-Type : application.json")
        .json({
          kode: res.statusCode,
          status: false,
          pesan: "Terjadi kesalahan / data tidak ada",
        })
        .end();
    });
});

app.listen(8000, "127.0.0.1", () => console.log("Running on port 8000"));
