const { error, log } = require('console');
var fs = require('fs');


fs.readFile('welcome.txt', function(err,data) {
    if (err) {
        return error(err)
    }
    log('this file is reading the requested file: ' + data.toString())
    
});

