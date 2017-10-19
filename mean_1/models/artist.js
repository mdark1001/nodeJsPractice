'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ArtistaSchema({
  nombre: String,
  description: String,
  image: String

});

module.exports = mongoose.model('Artist', ArtistaSchema);
