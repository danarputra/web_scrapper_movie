const fetchData = require("../src/fetch_data");

/// discover params
fetchData
  .getData("/collection/10?language=ID")
  .then((value) => console.log(value.data))
  .catch((err) => console.log(err));
