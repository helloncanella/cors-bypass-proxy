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
  next();
});


router.get('/', function(req, res) {
  var url = req.query.url ||'http://www.band.uol.com.br/rss/colunista_266.xml';
  req.pipe(request(url)).pipe(res);
});



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
});
