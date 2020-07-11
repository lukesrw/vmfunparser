try {
    // eslint-disable-next-line
    require("fs").rmdirSync(__dirname + "/src", {
        recursive: true
    });
} catch (e) {}
