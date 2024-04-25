const { error, log } = require('console');
var fs = require('fs');


fs.writeFile('welcome.txt','Hello Node','utf8', function(err) {
    if (err) {
        return error(err)
    }
    log('Write Success');
})

