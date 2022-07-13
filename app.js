const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
util = require('./util');


var app = express();

app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.sendFile('public/index.html', { root: __dirname });
});

app.get('/time', function(req, res) {

    console.log("To day is date :" + new Date().toISOString().slice(0, 10));
    util.getTimeInfo.then(result => res.status(200).json(result))
    .catch(err => res.status(500).send(err));
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});