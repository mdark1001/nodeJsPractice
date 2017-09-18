/*
 * Pasando funciones como parametros e invocar posteriormente 
 *  2017/09/18
 *  @mdark1001
 */

var Objecto = function() {

}

//se extiende el Objeto..
Objecto.prototype.Saludar = function(msg, callback) {
  console.log("Saludo: " + msg);
  if (typeof callback == 'function') {
    callback();
  } else {
    console.log(new Error("Error el callback no es una funcion"));
  }

}


// Se crea una instancia
var o = new Objecto();

o.Saludar("Que hay!!", function() {
  console.log("Se ejecuto la acción");
});
o.Saludar("eeee", 2);
/*
Objecto.prototype.Despedida = function() {
  console.log("Adios!!");
}
*/
o.Despedida();
