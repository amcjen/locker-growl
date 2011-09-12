var growl = require('./growl');
var sys = require('sys');
var http = require('http');

var options = {
  host: 'localhost',
  port: 9987,
  path: '/',
  method: 'POST'
};

var req = http.request(options, function(res) {});
req.end('Test message!');
