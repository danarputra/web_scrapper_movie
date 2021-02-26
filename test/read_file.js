const data = require("./testresult.json");

let results = [];

results.push(...data);

console.log(results.map((value) => value.id));
