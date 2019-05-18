var fs = require('fs')
var path = require('path')

var dir = process.argv[2]
var type = process.argv[3]

fs.readdir(dir, function(err, list) {
    
    if (err) return console.error(err);

    list.forEach(element => {
        if (path.extname(element) == "." + type) {
            console.log(element)
        }    
    });

})