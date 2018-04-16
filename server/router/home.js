const express = require('express');
const router = express.Router();
const mysql = require("../mysql");
const request = require("request");
var cheerio = require('cheerio');


router.get('/test', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
    console.log(1);
    var str = "select * from content where section=?";
	mysql(str, [req.query.index], function(result) {
		res.json(result)
	})

});




module.exports = router;