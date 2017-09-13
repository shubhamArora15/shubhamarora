var http = require('http');
var path = require('path');
var express = require('express');

/**
 * Creating instances for .
 */

var app = express();

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Setting up server.
 */

var server = http.createServer(app);

server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

function onError(){
  console.log("Problem in starting server");
}

function onListening(){
  console.log("Server is Started")
}
