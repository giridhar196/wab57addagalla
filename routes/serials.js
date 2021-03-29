var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Serials', { title: 'Search Results Serails' });
});

module.exports = router;