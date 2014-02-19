/*
	to run this, I navigated to where this file's directory is and entered the following:
	node server.js
	
	Then checked on my browser by typing in : 
	127.0.0.1:1337 OR localhost:1337
	ctrl + c in command line to close server


// set a variable and make it equal to the http module
var http = require('http');

//self calling function which takes two parameters
http.createServer(function(req,res){
	
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello!');

}).listen(1337,'127.0.0.1');
console.log('Webserver has started');
*/

// set a variable and make it equal to the http module
var http = require('http');
//also requiring the filesystem module
var fs = require('fs');

//self calling function which takes two parameters
http.createServer(function(req,res){
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-type':'html'});
		res.end(data);
	});
}).listen(1337,'127.0.0.1');
console.log('Webserver has started');

