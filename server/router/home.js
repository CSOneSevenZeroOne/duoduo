const express = require('express');
const router = express.Router();
const mysql = require("../mysql");



router.post('/', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `list` where sort=?";
    console.log(req.body.sort)
    mysql(str,[req.body.sort],function(results){
        res.send(results)
    })
});

module.exports = router;