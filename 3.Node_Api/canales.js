const fs = require('fs'); //improtamos

const readable = fs.createReadStream("./texto.txt");

readable.on('data', (chuck) => {
  console.log(`recibiendo ${chuck.length} bytes of data.`);
  console.log(chuck);
  readable.pause();
  console.log("Esperando la info por un segundo");
  setTimeout(() => {
    console.log("...");
    readable.resume();
  }, 1000);
});


readable.on('end', () => {
  console.log("Se finalizo la lectura del canal");
});

readable.on('close', () => {
  console.log("Canal cerrado...");
});
