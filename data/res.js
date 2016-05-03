
var http = require('http');
var host = '127.0.0.1';
var port = '1330';
var fs = require('fs');
var fileName = 'yaz.html';
var data = fs.readFileSync(fileName,"utf8");


var server = http.createServer( function(request,response){console.log('gelen istek:' + request.url);
response.writeHead(200, {'Content-type' : 'text/html'});
response.end(data);
});

server.listen(port.host,function(){
  console.log('Dinlenen port:' + host + ':' + port);
});
