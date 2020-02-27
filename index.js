var request = require("request-promise");
var fs = require("fs");

var options = {
    method: "POST",
    uri: "https://fundebug.com/javascript/sourcemap/upload",
    formData: {
        apikey: "YOUR-API-KEY",
        appversion: "1.0.0",
        sourceMap: {
            value: fs.createReadStream("./data/app.6c20067a.js.map"),
            options: {
                filename: "app.6c20067a.js.map",
                contentType: "text"
            }
        }
    }
};

request(options)
    .then(function(success) {
        console.log("success:", success);
    })
    .catch(function(err) {
        console.log("fail:", err);
    });
