const express = require('express');
const router = express.Router();
const mysql = require("../mysql");

router.post('/register', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
	mysql("INSERT INTO userinfo(`u_name`,`u_pwd`,`u_tel`) VALUES('" + req.body.u_name + "','" + req.body.u_pwd + "','" + req.body.u_tel + "')", {}, function(results) {
		res.send("注册成功");
	})

});

router.post('/', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
	var str = "select * from `userinfo` where u_name=?";
	mysql(str, [req.body.u_name], function(results) {
		console.log(results)
		if(results.length > 0) {
			res.json({
				status: 0,
				msg: "用户名已存在"
			})
		} else {
			res.json({
				status: 1,
				msg: "可以注册"
			})
		}

	})
});

router.post('/login', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");

	var str = "select * from `userinfo` where u_name=? and u_pwd=?";
	mysql(str, [req.body.u_name, req.body.u_pwd], function(results) {
		res.json(results)
	})
});

module.exports = router;