let dbmysql = require('mysql');

class DB {

    constructor(hostname, dbname, password, database, port = '') {
        this.db = null;
        this.db_query = '';
        this.config = {
            host: hostname + '' + port,
            user: dbname,
            password: password,
            database: database
        };

        this.conexion = null;


    }

    connection() {
        this.conexion = dbmysql.createConnection(this.config);

        this.conexion.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return;
            }


        });

    }

    close() {
        this.conexion.end(function (err) {
            // console.log(new Error('Error no se puede ejecutar un query vacio'));
        });
    }

    select(campos) {
        if (campos == undefined || campos == '') {
            campos = ' * '
        }
        if (Array.isArray(campos)) {
            campos = campos.join(',');
        }
        this.db_query += "SELECT " + campos;
    }

    from(table_name) {
        if (table_name == undefined || table_name == '') {
            return new Error('Error el nombre de la tabla es incorrecto');
        }
        this.db_query += " FROM " + table_name;
    }

    get(table_name, callback) {

        if (table_name !== null && table_name !== '') {
            this.select();
            this.from(table_name);
            console.log(this.db_query);

            this.query(this.db_query).then(function (result, fields) {
                callback(result, fields);
            }, function (err) {
                console.log(err);
            });
        }
    }

    getKeysJson(array_data) {
        if (typeof array_data == "object" || typeof array_data == "Object") {
            var keys = Object.keys(array_data); // forma para obtener las keys de un json
            return keys;
        }
        return "";
    }

    getBodyJson(array_data) {
        if (typeof array_data == "object" || typeof array_data == "Object") {
            var keys = Object.keys(array_data);
            var body = Object.keys(array_data).map(function (k) {
                return "'" + array_data[k] + "'"
            });

            return body.join();
        }
        return "";
    }

    insert(table_name, array_data, callback) {
        if (table_name == undefined || table_name == '') {
            return new Error('Error el nombre de la tabla es incorrecto');
        }

        this.db_query = `INSERT INTO ${table_name} (${this.getKeysJson(array_data)}) VALUES( ${this.getBodyJson(array_data).toString()});`;
        this.query(this.db_query).then(function (result, fields) {
            callback(result);
        }, function (err) {
            console.log(err);
        });


    }

    last_query() {
        return this.db_query;
    }

    query(str_query) {
        return new Promise((resolve, reject) => {
            if (str_query == '' || str_query == null) {
                reject(new Error('Error no se puede ejecutar un query vacio'));
            }
            this.connection();
            this.conexion.query(str_query, function (errr, result, fields) {
                if (errr) reject(new Error(errr));
                resolve(result, fields);

            });

            this.close();
        });
    }


}

module.exports = DB;


