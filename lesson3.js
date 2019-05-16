var fs = require('fs')

/*
var buf = fs.readFileSync(process.argv[2])

var str = buf.toString()

var arr = str.split("\n")

console.log(arr.length - 1)
*/

fs.readFile('lesson3.txt', 'utf8',function(err,data) {
    if (err) throw err;
    console.log(data.split("\n").length - 1);    
})
