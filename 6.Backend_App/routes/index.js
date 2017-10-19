var express = require('express');
const db = require('./db_client.js');
var router = express.Router();

var midb = new db();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
  console.log(midb.getCollections());
});

module.exports = router;
