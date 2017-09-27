const fs = require('fs');
class Cliente {

  constructor(host, port, protocol) {
    this.host = host;
    this.port = port;
    this.protocol = protocol;
    this.logDir = fs.mkdtempSync("/tmp/cliente-http-");
  }

  autenticarBasic(user, pass) {
      this.basicAuth = new Buffer(user + ":" + pass).toString("base64");
      //  console.log(this.basicAuth);
    }
    // procesar los headers para mantener l
  procesarHeaders() {
    var headers = {
      "Accept": "*/*",
      "User-Agent": "Cliente node.js"
    }
    if (this.basicAuth != undefined) {
      headers.Authorization = "Basic " + this.basicAuth;
    }
    return headers;
  }


  get(uri, callback) {
    var options = {
        hostname: this.host,
        port: this.port,
        method: 'GET',
        path: this.protocol + "://" + this.host + '' + uri,
        headers: this.procesarHeaders()

      }
      //console.log(options);
    this.request(options, callback);
  }
  post(uri, data) {

  }

  //manejo de peticiones
  request(options, callback) {
    if (this.protocol != "http" && this.protocol != "https") {
      console.log(new Error("Error al hacer el request"));
      return;
    }
    const http = require(this.protocol);

    var respuesta = {
      status: null,
      body: "",
      headers: null
    }

    var peticion = http.request(options, (canalRespuesta) => {
      canalRespuesta.on('data', (chuck) => {
        respuesta.body += chuck;
      });

      canalRespuesta.on('end', () => {
        respuesta.status = canalRespuesta.status;
        respuesta.headers = canalRespuesta.headers;
        callback(respuesta);
      });

    });

    peticion.end();
  }

}


module.exports = Cliente;
