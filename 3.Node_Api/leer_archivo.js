const fs = require('fs'); //Importamos el fs 8File System)
//Leer un archivo (texto.txt)
//let archivo = fs.readFileSync('./texto.txt'); //Forma sincrona
//console.log(archivo.toString()); //toString() formatea a texto el buffer del archivo
let archivo;
fs.readFile('./texto.txt', (err, data) => { // Llamando el callback de forma asincrona
  //console.log(data);
  archivo = data;
});

console.log(archivo);
