const fs = require("fs");

if (fs.statSync(__dirname + "/src")) {
    fs.rmdirSync(__dirname + "/src", {
        recursive: true
    });
}
