var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // TODO pull title from database under certain
  res.render('body/index', { title: 'FBC Waco College' });
});

router.get('/contact', function(req, res, next) {
    // TODO pull title from database under certain
    res.render('body/contact', { title: 'FBC Waco College' });
});

module.exports = router;
