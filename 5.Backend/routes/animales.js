/*
  Creando una API para el módulo animales
*/

const express = require('express');
var router = express.Router();

var contadorVistas = function(req, res, next) {
  if (req.session.vistas == undefined) {
    req.session.vistas = 0;
  }
  req.session.vistas++;
  next();
}
router.use(contadorVistas); // uso de millware

router.get('/', function(req, res, next) {
  res.send("API de animales");
});


router.post('/', function(req, res, next) {
  console.log(req.body);
  if (req.get('content-type') != 'application/json') {
    res.status(403).send('Error expected json format');
  }
  res.send("API de animales" + req.body);
});

module.exports = router;
