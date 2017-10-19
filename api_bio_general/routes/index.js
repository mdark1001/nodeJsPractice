var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.app.get('db'));
    var db=req.app.get('db');



    res.render('index', { title: 'Express' });
});

module.exports = router;
