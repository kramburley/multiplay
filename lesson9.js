var http = require('http');
var concat = require('concat-stream');

var results = []
var count = 0;

function print() {
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
        
    };
}

function gather_url(index) {
    http.get(process.argv[2 + index], function(response) {
        response.on('err', console.error);
        response.pipe(concat(function(data) {
            
            results[index] = data.toString();
            count++;

            if (count == 3) {
                print();
            }
        }))
    })
}


for (let i = 0; i < 3; i++) {
    gather_url(i);
}
