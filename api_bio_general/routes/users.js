var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/get_users', function (req, res, next) {
    //console.log(req.app.get('db'));
    var db = req.app.get('db');


});

router.post('/login', function (req, res, next) {
    //res.send("Error");
    //console.log(req.body);
    let datos = req.body;
    var db = req.app.get('db');
    let sql = `SELECT * FROM usuario where email=${datos.email} AND password=${datos.password}`;
    db.query(sql).then(function (result, field) {
        //res.send(result);

        res.send(result);
    }, function (err) {
        res.send(err);
    });


});
router.get('/login', function (req, res, next) {
    res.send("error");

});

module.exports = router;
