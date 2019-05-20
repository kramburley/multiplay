var net = require('net');
var strftime = require('strftime');
var given_port = process.argv[2];

var server = net.createServer(function (socket) {
    //socket handling logic "YYYY-MM-DD hh:mm"
    socket.end(strftime('%F %H:%M\n'));
    
})

server.listen(given_port)
