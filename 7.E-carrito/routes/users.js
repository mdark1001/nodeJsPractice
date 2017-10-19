var express = require('express');
var router = express.Router();
//definimos la colección

const coleccion = 'usuarios';
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  var db = req.app.get('db');
  var usuario = req.body; //

  if (validarRegistro(usuario)) {
    db.collection(coleccion).insertOne(usuario, (err, resp) => {
      res.send(resp);
    });
  }

});

function validarRegistro(usuario) {
  if (usuario == undefined || usuario == null) {
    return false;
  }
  return true;
}
module.exports = router;
