const express = require('express');
const router = express.Router();
const mysql = require("../mysql");
const request = require("request");
var cheerio = require('cheerio');


router.get('/test', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
    var str = "select * from list";
	mysql(str, [], function(result) {
		res.json(result)
	})
});
router.get('/content', function(req, res, next) {
    res.append("Access-Control-Allow-Origin", "*");
    var str = "select * from content where section=? and book_id=?";
    mysql(str, [req.query.index,req.query.book_id%14+1], function(result) {
        res.json(result)
    })
});
router.get('/section', function(req, res, next) {
    console.log(req.query.book_id);
    res.append("Access-Control-Allow-Origin", "*");
    var str = "select title from content where book_id=? order by section";
    mysql(str, [req.query.book_id%14+1], function(result) {
        res.json(result)
    })
});

router.get("/info",function(req, res, next){
    res.append("Access-Control-Allow-Origin", "*");
    var str="select * from list where id=?";
    mysql(str, [req.query.book_id], function(result) {
        res.json(result)
    })
})

router.get("/sort", function(req, res){
    res.append("Access-Control-Allow-Origin", "*");
    console.log(req.query);
    //类型不为空
    if(req.query.sort != ""){
        //类型不为空  状态为空
        if(req.query.status==""){
            //类型不为空  状态为空 价格免费
            if(req.query.bookPrice!="免费"){
                if(req.query.sort=="男生分类"||req.query.sort=="女生分类"){
                    var str = "select count(*) from `list` where class1=? and words>? and words<?";
                    mysql(str, [req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2)], function(results){
                        var obj = {
                            count : results
                        };
                        var str = "select * from `list` where class1=? and words>? and words<? order by id desc LIMIT ?,18";
                        mysql(str, [req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2), req.query.index * 18], function(results){
                            obj.list = results;
                            res.send(obj)
                        })
                    });
                }else{
                    var str = "select count(*) from `list` where class=? and words>? and words<?";
                    mysql(str, ["类型："+req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2)], function(results){
                        var obj = {
                            count : results
                        };
                        var str = "select * from `list` where class=? and words>? and words<? order by id desc LIMIT ?,18";
                        mysql(str, ["类型：" + req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2), req.query.index * 18], function(results){
                            obj.list = results;
                            res.send(obj)
                        })
                    });
                }
            }else {
                //类型不为空  状态为空 收费
                if(req.query.sort=="男生分类"||req.query.sort=="女生分类"){
                    var str = "select count(*) from `list` where class1=? and words>? and words<? and bookPrice=?";
                    mysql(str, [req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice], function(results){
                        var obj = {
                            count : results
                        };
                        var str = "select * from `list` where class1=? and words>? and words<?  and bookPrice=? order by id desc LIMIT ?,18";
                        mysql(str, [req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice, req.query.index * 18], function(results){
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
                        var str = "select * from `list` where class=? and words>? and words<?  and bookPrice=? order by id desc LIMIT ?,18";
                        mysql(str, ["类型：" + req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice, req.query.index * 18], function(results){
                            obj.list = results;
                            res.send(obj)
                        })
                    });
                }
            }
        }else {
            if(req.query.bookPrice!="免费"){
                if(req.query.sort=="男生分类"||req.query.sort=="女生分类"){
                    var str = "select count(*) from `list` where class1=? and words>? and words<? and status=?";
                    mysql(str, [req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),req.query.status], function(results){
                        var obj = {
                            count : results
                        };
                        var str = "select * from `list` where class1=? and words>? and words<? and status=? order by id desc LIMIT ?,18";
                        mysql(str, [req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),req.query.status, req.query.index * 18], function(results){
                            obj.list = results;
                            res.send(obj)
                        })
                    });
                }else {
                    var str = "select count(*) from `list` where class=? and words>? and words<? and status=?";
                    mysql(str, ["类型："+req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),req.query.status], function(results){
                        var obj = {
                            count : results
                        };
                        var str = "select * from `list` where class=? and words>? and words<? and status=? order by id desc LIMIT ?,18";
                        mysql(str, ["类型：" + req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),req.query.status, req.query.index * 18], function(results){
                            obj.list = results;
                            res.send(obj)
                        })
                    });
                }

            }else {
                if(req.query.sort=="男生分类"||req.query.sort=="女生分类"){
                    var str = "select count(*) from `list` where class1=? and words>? and words<? and bookPrice=?";
                    mysql(str, [req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice], function(results){
                        var obj = {
                            count : results
                        };
                        var str = "select * from `list` where class1=? and words>? and words<?  and bookPrice=? order by id desc LIMIT ?,18";
                        mysql(str, [req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice, req.query.index * 18], function(results){
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
                        var str = "select * from `list` where class=? and words>? and words<?  and bookPrice=? order by id desc LIMIT ?,18";
                        mysql(str, ["类型：" + req.query.sort,parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice, req.query.index * 18], function(results){
                            obj.list = results;
                            res.send(obj)
                        })
                    });
                }
            }
        }
    } else {
        if(req.query.status==""){
            console.log(req.query.bookPrice,2);
            if(req.query.bookPrice!="免费"){
                var str = "select count(*) from `list` where words>? and words<?";
                mysql(str, [parseInt(req.query.num1),parseInt(req.query.num2)], function(results){
                    var obj = {
                        count : results
                    };
                    var str = "select * from `list` where words>? and words<? order by id desc LIMIT ?,18";
                    mysql(str, [parseInt(req.query.num1),parseInt(req.query.num2), req.query.index * 18], function(results){
                        obj.list = results;
                        res.send(obj)
                    })
                });
            }else {
                var str = "select count(*) from `list` where words>? and words<? and bookPrice=?";
                mysql(str, [parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice], function(results){
                    var obj = {
                        count : results
                    };
                    var str = "select * from `list` where words>? and words<?  and bookPrice=? order by id desc LIMIT ?,18";
                    mysql(str, [parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice, req.query.index * 18], function(results){
                        obj.list = results;
                        res.send(obj)
                    })
                });
            }
        }else {
            if(req.query.bookPrice!="免费"){
                console.log(3);
                var str = "select count(*) from `list` where words>? and words<? and status=?";
                mysql(str, [parseInt(req.query.num1),parseInt(req.query.num2),req.query.status], function(results){
                    var obj = {
                        count : results
                    };
                    var str = "select * from `list` where words>? and words<? and status=? order by id desc LIMIT ?,18";
                    mysql(str, [parseInt(req.query.num1),parseInt(req.query.num2),req.query.status, req.query.index * 18], function(results){
                        obj.list = results;
                        res.send(obj)
                    })
                });
            }else {
                console.log(4);
                var str = "select count(*) from `list` where words>? and words<? and bookPrice=?";
                mysql(str, [parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice], function(results){
                    var obj = {
                        count : results
                    };
                    var str = "select * from `list` where words>? and words<?  and bookPrice=? order by id desc LIMIT ?,18";
                    mysql(str, [parseInt(req.query.num1),parseInt(req.query.num2),"价格："+req.query.bookPrice, req.query.index * 18], function(results){
                        obj.list = results;
                        res.send(obj)
                    })
                });
            }
        }
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