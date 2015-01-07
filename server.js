var http = require('http');
var fs = require('fs');


fs.readFile('/home/app/code/server.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env['PORT'] || 8080, '127.0.0.1');
});
