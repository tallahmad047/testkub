var http = require ('http');

var handleRequest = function (request ,reponse){
    console.log('Received request for URL: '+request.url);
    reponse.writeHead(200);
    reponse.end('hello world!');
};
var www =http.createServer(handleRequest);
www.listen(8090);