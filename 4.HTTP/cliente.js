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
    this.request(options, null, callback);
  }
  post(uri, data, callback) {
    var options = {
      hostname: this.host,
      port: this.port,
      method: 'POST',
      path: this.protocol + "://" + this.host + '' + uri,
      headers: this.procesarHeaders()

    }
    this.request(options, data, callback);
  }

  //manejo de peticiones
  request(options, data, callback) {
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

    if (data != undefined && data != null) {
      peticion.setHeader("Content-Length", Buffer.byteLength(JSON.stringify(
        data)));
      peticion.setHeader("Content-Type", "application/json");
      peticion.write(JSON.stringify(data));
    }

    peticion.end();
  }

}


module.exports = Cliente;
