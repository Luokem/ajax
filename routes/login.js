var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("req.query",req.query);
    res.render('login',{ok: "ok"});  
});

module.exports = router;
