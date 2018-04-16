const express = require('express');
const router = express.Router();
const mysql = require("../mysql");



router.post('/', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `list` where sort=?";
    mysql(str,[req.body.sort],function(results){
        res.send(results)
    })
});

router.post('/fenlei', function(req, res, next) {
    res.append("Access-Control-Allow-Origin","*");
    var str = "select * from `list` where class=? LIMIT 0,6";
    mysql(str,["类型："+req.body.class],function(results){
        var obj={
            type:req.body.class,
            list:results
        }
        res.json(obj)
    })
});

module.exports = router;