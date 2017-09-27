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
router.use(contadorVistas);

router.get('/', function(req, res, next) {
  console.log(req.session.vistas);
  res.send("API de animales");
})
router.post('/', function(req, res, next) {
  console.log(req.session.vistas);
  res.send("API de animales");
})

module.exports = router;
