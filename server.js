/*var HTTP = require('http');

HTTP.createServer(function (request, response) {
	response.writeHead(200, {"Content-type": "text/plain" });
	response.end("Hello!");
}).listen(10000, "127.0.0.1");
console.log("Webserver has started");
*/


var HTTP = require('http');
var FS = require('fs');	


HTTP.createServer(function (request, response) {

	FS.readFile("index.html", function (err, data) {

		response.writeHead(200, {"Content-type": "text/html" });
		response.end(data);
	});

}).listen(10000, "127.0.0.1");
console.log("Webserver has started");


