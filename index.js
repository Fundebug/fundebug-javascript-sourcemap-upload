const request = require("request-promise");
const fs = require("fs");

var options = {
    method: "POST",
    // uri: "https://fundebug.com/javascript/sourcemap/upload",
    uri: "http://localhost:10010/javascript/sourcemap/upload",
    formData: {
        apikey: "YOUR-API-KEY",
        appversion: "2.0.0",
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
