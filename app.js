const express = require('express');

const pageRoute = require('./routes/page');

const server = express();

server.use(express.static(__dirname + '/public'));
server.set('view engine' , 'ejs');
server.set('views', __dirname + '/views');

server.use('/', pageRoute);

server.listen(5000);