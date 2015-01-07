var express = require ('express');
var fs = require ('fs');
var app = express ();
var bodyParser = require ('body-parser');
app.use (bodyParser ());
var server = require ('http').createServer (app);
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);

var my_name="Goku";
var my_power=9001;

app.get ('/', function (req, res){
    console.log ('GET /');
    res.render('index.html',{name:my_name,power:my_power});    
    });
app.use(express.static(__dirname + '/public'));
server.listen(process.env['PORT'] || 8080, '127.0.0.1');