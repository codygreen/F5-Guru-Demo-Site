var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  	{ 
  		title: 'Express',
  		user: req.get('X-User'),
  		headers: req.headers, 
  		headersSize: Object.keys(req.headers).length
  	});
});

module.exports = router;
