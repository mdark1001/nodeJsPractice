const clientedb = require('mongodb').MongoClient;

//
class db {
  constructor() {
    this.url = 'mongodb://mongodb@127.0.0.1:32768/dbApi2';
    var db = null;
    clientedb.connect(this.url, (err, db) => {
      this.db = db;
    });

  }
  getCollections() {
    return this.db.getCollectionNames();
  }
}
module.exports = db;
