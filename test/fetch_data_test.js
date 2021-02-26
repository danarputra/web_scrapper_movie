const fetchData = require("../src/fetch_data");
const url = require("../src/url");

fetchData
  .getData(url.discoverMovieParams)
  .then((value) => console.log(value.data["results"]))
  .catch((err) => console.log(err));