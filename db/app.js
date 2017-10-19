const cliente = require('mongodb').MongoClient;


var url = 'mongodb://mongodb@127.0.0.1:32768/dbApi2';

//

cliente.connect(url, (err, db) => {
  // colecciones
  db.collection('animales')
    .insertOne({
      nombre: "Luna",
      especie: "Perro"
    }, (err, result) => {
      db.collection('animales').findOne((err, result) => {
        console.log(result);
        su
        db.close();
      });
    });
});
