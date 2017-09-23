var http = require('http');
var path = require('path');
var express = require('express');
var router = express.Router();
/**
 * Creating instances for .
 */

var app = express();

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT || '8111';
app.set('port', port);

/**
 * Setting up server.
 */

var server = http.createServer(app);

server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

function onError(error){
  console.log(port,error)
  console.log("Problem in starting server");
}

function onListening(){
  console.log("Server is Started")
}

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});
