'use strict'
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema({
  nombre: String,
  username: String,
  email: String,
  password: String,
  role: String,
  image: String
});

module.exports = mongoose.model('User', UserSchema);
