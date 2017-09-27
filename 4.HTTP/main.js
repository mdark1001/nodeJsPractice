var Cliente = require('./cliente.js');

var clienteGitHub = new Cliente("api.github.com", "443", "https");

console.log(clienteGitHub);

// autenticar nuestro cliente...

clienteGitHub.autenticarBasic("mdark1001", "");

//peticion get
clienteGitHub.get('/users/mdark1001', (respuesta) => {
  console.log(respuesta);
});
