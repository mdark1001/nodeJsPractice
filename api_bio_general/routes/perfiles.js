let express = require('express');
let router = express.Router();

router.get('/all_perfiles', function (req, res, next) {

    let db = req.app.get('db');
    db.get('perfiles',function (result, fields) {
        res.send(result);
    });
});


module.exports = router;