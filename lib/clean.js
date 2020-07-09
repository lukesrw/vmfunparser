try {
    require("fs").rmdirSync(__dirname + "/src", {
        recursive: true
    });
} catch (e) {}
