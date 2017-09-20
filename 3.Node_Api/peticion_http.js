const http = require('http');
// opciones en la comunicación

let opciones = {
  port: 80,
  hostname: "google.com",
  method: "get",
  path: "http://google.com"
}
let req = http.request(opciones, (respuesta) => {
  //La 'respuesta' es un canal de lectura
  respuesta.on('data', (chuck) => {
    console.log(chuck.toString());
  });
});
req.end();
console.log("Peteción lanzada");
