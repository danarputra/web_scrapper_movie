const fetchData = require("../src/fetch_data");

/// discover params
fetchData
  .getData("/discover/movie?region=ID&language=id")
  .then((value) => console.log(value.data["results"]))
  .catch((err) => console.log(err));
