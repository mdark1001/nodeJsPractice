let db=require('./db');
const hostname = "localhost";
const portd = '';
const username = 'root';
const database='bioGeneral';
const password = 'mdark1001';

let dbMysql=new db(hostname,username,password,database,portd);

/*
dbMysql.query("SHOW tables").then(function(result,fileds){
    console.log(result);
},function(err){
    console.log(err);
})*/
/*
dbMysql.get('perfiles',function (result,fields) {
    console.log(result);
});
*/

/*
dbMysql.insert('perfiles',{
    nombre_perfil:'Administrador2',

},function(data){
    console.log(dbMysql.last_query());
    console.log(data.insertId);
});
*/
//console.log(dbMysql.last_query());

