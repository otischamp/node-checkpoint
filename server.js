var http = require('http');


http.createServer(function(request, response,){

    response.end('<h1>Hello Node!!!!</h1>')


}).listen('3000')