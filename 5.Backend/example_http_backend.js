const cliente = require('../4.HTTP/cliente.js');

var clienteApi = new cliente('localhost', '3000', 'http');

clienteApi.get('/animals/', (respuesta) => {
  console.log(respuesta);
});


clienteApi.post('/animals/', {
  "animal": "perro",
  "character": "perro"
}, (respuesta) => {
  console.log(respuesta);
});
