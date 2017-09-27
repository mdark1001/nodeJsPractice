const cliente = require('../4.HTTP/cliente.js');

var clienteApi = new cliente('localhost', '3000', 'http');

clienteApi.get('/animals/', (respuesta) => {
  console.log(respuesta);
});
clienteApi.post('/animals/', {
  "body": "algo"
}, (respuesta) => {
  console.log(respuesta);
});
