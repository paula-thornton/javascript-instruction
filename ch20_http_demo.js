let http = require('http');

let server = http.createServer(function(request, response) {
    console.log('got a request');
    
    response.write('hello from your web server');
    response.end();
});

server.listen(3000);