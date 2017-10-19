"use strict"

var mongoose = require('mongoose');
var app = require('./app.js');
var port = process.env.PORT || 3977;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean2', (err, res) => {
  if (err) throw err;
  console.log("La db funciona correctamente");
  app.listen(port, function() {
    console.log("Init Server ApiRest http://localhost:" + port);
  })
})
