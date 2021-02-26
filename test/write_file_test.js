const fs = require("fs");

var filePath = __dirname + "result.txt";

fs.writeFile(filePath, "test", "utf8", (err) => {
  if (err) {
    console.log("Error writing file " + err);
  } else {
    console.log("Success writing file");
  }
});
