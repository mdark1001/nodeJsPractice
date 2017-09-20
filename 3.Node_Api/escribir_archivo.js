const fs = require('fs');
const archivo = fs.createWriteStream('escritura.txt', {
  flags: 'r+',
  start: 4
});
archivo.write("Hola mundo!!!");
archivo.end();
