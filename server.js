var http = require('http');
var path = require('path');
var request = require('request');

var express = require('express');

var router = express();
var server = http.createServer(router);

var url;

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});


router.get('/', function(req, res) {
  var url = req.query.url ||'http://www.band.uol.com.br/rss/colunista_266.xml';
  
  // req('http://www.band.uol.com.br/rss/colunista_266.xml')
  
  request('http://www.band.uol.com.br/rss/colunista_266.xml', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      body = body.replace(/ISO-8859-1/,'UTF-8')
      return unescape(encodeURIComponent(body)) // Show the HTML for the Google homepage. 
    }
  }).pipe(res)
  
  // req.pipe(request(url)).pipe(res);
 
  
 
});



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
});
