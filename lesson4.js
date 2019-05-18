var fs = require('fs')

// fs.readFile("lesson3.txt", 'utf8', function (err,data) {
    
fs.readFile(process.argv[2], 'utf8', function(err,data) {
    if (err) throw err;
    console.log(data.split("\n").length - 1);

})