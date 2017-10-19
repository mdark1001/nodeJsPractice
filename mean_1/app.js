'use strict'
const express = require('express');
const bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({
  extend: false
}));
app.use(bodyParser.json());
//configurar las cabeceras http



//rutas
app.get('/', function(req, res, next) {
  res.send('El servidor está funcionando');
});

module.exports = app;
