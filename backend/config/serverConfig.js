var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


consign().include('config/dbConnection.js')
    .then('api/DAO')
    .then('api/routes')
    .then('api/controllers').into(app);


module.exports = app;