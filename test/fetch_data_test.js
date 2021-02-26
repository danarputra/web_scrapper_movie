const fetchData = require("../src/fetch_data");
const fakeDataJSON = require("./testresult.json");

const url = require("../src/url");

/// discover params
fetchData
  .getData(url.discoverMovieParams)
  .then((value) => console.log(value.data["results"]))
  .catch((err) => console.log(err));

/// fetch data using local data

fakeDataJSON.forEach((data) => {
  console.log(data.id);
  console.log(data.title);
});
