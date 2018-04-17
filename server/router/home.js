const express = require('express');
const router = express.Router();
const mysql = require("../mysql");
const request = require("request");
var cheerio = require('cheerio');


/*router.get('/test', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
    console.log(1);
    var str = "select * from content where section=?";
	mysql(str, [req.query.index], function(result) {
		res.json(result)
	})

});*/


router.get("/sort", function(req, res){
    res.append("Access-Control-Allow-Origin", "*");
    console.log(req.query);
    if(req.query.sort != ""){
        console.log(req.query.status,1);
        if(req.query.status==""){
            console.log(req.query.bookPrice,2);
            if(req.query.bookPrice!="免费"){
                var str = "select count(*) from `list` where class=? and words>? and words<?";
                mysql(str, ["类型："+req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2)], function(results){
                    var obj = {
                        count : results
                    };
                    var str = "select * from `list` where class=? and words>? and words<? order by id desc LIMIT ?,12";
                    mysql(str, ["类型：" + req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2), req.query.index * 12], function(results){
                        obj.list = results;
                        res.send(obj)
                    })
                });
            }else {
                var str = "select count(*) from `list` where class=? and words>? and words<? and bookPrice=?";
                mysql(str, ["类型："+req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice], function(results){
                    var obj = {
                        count : results
                    };
                    var str = "select * from `list` where class=? and words>? and words<?  and bookPrice=? order by id desc LIMIT ?,12";
                    mysql(str, ["类型：" + req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice, req.query.index * 12], function(results){
                        obj.list = results;
                        res.send(obj)
                    })
                });
            }
        }else {
            if(req.query.bookPrice!="免费"){
                console.log(3);
                var str = "select count(*) from `list` where class=? and words>? and words<? and status=?";
                mysql(str, ["类型："+req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),req.query.status], function(results){
                    var obj = {
                        count : results
                    };
                    var str = "select * from `list` where class=? and words>? and words<? and status=? order by id desc LIMIT ?,12";
                    mysql(str, ["类型：" + req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),req.query.status, req.query.index * 12], function(results){
                        obj.list = results;
                        res.send(obj)
                    })
                });
            }else {
                console.log(4);
                var str = "select count(*) from `list` where class=? and words>? and words<? and bookPrice=?";
                mysql(str, ["类型："+req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice], function(results){
                    var obj = {
                        count : results
                    };
                    var str = "select * from `list` where class=? and words>? and words<?  and bookPrice=? order by id desc LIMIT ?,12";
                    mysql(str, ["类型：" + req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice, req.query.index * 12], function(results){
                        obj.list = results;
                        res.send(obj)
                    })
                });
            }
        }
    } else {
        var str = "select count(*) from `list`";
        mysql(str, [req.query.sort], function(results){
            var obj = {
                count : results
            }
            var str = "select * from `list` order by id desc LIMIT ?,12";
            mysql(str, [req.query.index * 12], function(results){
                obj.list = results;
                res.send(obj)
            })
        })
    }

})

router.get('/words', function(req, res, next){
    res.append("Access-Control-Allow-Origin", "*");
    var str = "select * from `list` where sort=? and ";
    mysql(str, [req.query.sort], function(results){
        res.send(results)
    })
});

router.post('/', function(req, res, next){
    res.append("Access-Control-Allow-Origin", "*");
    var str = "select * from `list` where sort=?";

    mysql(str,[req.body.sort],function(results){
        res.send(results)
    })
});

router.get('/bangdan', function (req, res, next) {
    res.append("Access-Control-Allow-Origin", "*");
    var str1 = ""
    for (var i = 0; i < 10; i++) {
        var num = parseInt(Math.random() * 2000) + 1
        if (i > 0) {
            str1 += " or id=" + num
        } else {
            str1 += "id=" + num
        }
    }

    var str = "select * from `list` where "+str1;

    mysql(str, [], function (results) {
        res.send(results)

    })
});

router.get('/gengxin', function (req, res, next) {
    res.append("Access-Control-Allow-Origin", "*");
    var str = "select * from `content` as a join list as b on a.book_id=b.id where status=1";
    mysql(str, [], function (results) {
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