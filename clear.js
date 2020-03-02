var request = require("request-promise");
var fs = require("fs");

var options = {
    method: "POST",
    // uri: "https://fundebug.com/javascript/sourcemap/clear",
    uri: "http://localhost:10010/javascript/sourcemap/clear",
    body: {
        apikey: "YOUR-API-KEY"
    },
    json: true
};

request(options)
    .then(function(success) {
        console.log("success:", success);
    })
    .catch(function(err) {
        console.log("fail:", err);
    });
