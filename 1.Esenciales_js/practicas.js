//POO


var Objecto = function() {

}

//se extiende el Objeto..
Objecto.prototype.Saludar = function(msg) {
  console.log("Saludo: " + msg);
}


// Se crea una instancia
var o = new Objecto();
o.Saludar("Que hay!!");

Objecto.prototype.Despedida = function() {
  console.log("Adios!!");
}

o.Despedida();
