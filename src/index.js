var express = require('express');
var server = express();

// compress all content
server.use(express.compress());

// routes
server.use('/assets/', express.static(__dirname + '/../build/assets/'));
server.use('/assets/', express.static(__dirname + '/assets/'));
server.use('/api/', express.static(__dirname + '/api/'));
server.use(express.static(__dirname + '/views/'));

// log all requests except the static ones above
// server.use(express.logger());

// route all other requests to index.html
server.get('/*', function(req, res) {
    res.sendfile(__dirname + '/views/index.html');
});

server.listen(3000); //the port you want to use
