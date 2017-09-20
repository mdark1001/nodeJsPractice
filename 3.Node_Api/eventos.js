// se importa de la API events
const Eventos = require('events');


class Carros extends Eventos {
  constructor() {
    super(); // se inicia el constructor del padre
    this.contador = 0;
  }

  Arrancar() {
    console.log("Iniciando el auto...");
    this.emit('arranco', this.contador); // se emite el evento obligatorio
    this.contador++;
  }
}

var carro1 = new Carros();

// para escuchar un evento se tiene que subscribir con on

carro1.on("arranco", function(e) { //pasando parametros.. 
  console.log("El evento fue escuchado :", e);

});
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
carro1.Arrancar();
