var mymodule = require('./lesson6_pt2')

var dir = process.argv[2]
var type = process.argv[3]

function print(err, matches) {
    if (err) throw err;
    matches.forEach(element => {
        console.log(element)
    });
}

mymodule(dir, type, print);