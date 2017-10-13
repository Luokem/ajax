var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.query.name === "lisi" && req.query.password === "123") {
    console.log(req.query.name);
    res.status(200);
    res.send("ok");
  }
  else{
    res.status(200);
    res.send("fail");
  }
});

router.post('/', function(req, res, next) {
  console.log("req.body",req.body);
  if(req.body.name === "lisi" && req.body.password === "123") {
    res.status(200);
    res.send("ok")
  }
  else{
    res.status(200);
    res.send("fail");
  }
});

module.exports = router;
