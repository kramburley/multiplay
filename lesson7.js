var http = require('http');

// http.get(process.argv[2], function callback(response) {
//     response.on("data", function(data) {
//         console.log(data)
//     }).setEncoding('utf8')
// })



http.get(process.argv[2], function(response) {
    response.on('data', console.log);
    response.on('error', console.error);
    response.setEncoding('utf8');
})