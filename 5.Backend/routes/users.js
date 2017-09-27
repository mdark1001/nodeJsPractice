var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/:nameuser', function(req, res, next) {
  // req -> peticion del cliente
  // res -> respuesta al usuario
  // next-> callback();
  var usuario = req.params.nameuser;

  res.send('Hola ' + usuario);
});

module.exports = router;
