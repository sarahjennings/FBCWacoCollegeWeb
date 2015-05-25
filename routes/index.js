var express = require('express');
var router = express.Router();

/**
 * Route to home page
 */
router.get('/', function(req, res, next) {
  // TODO pull title from database under certain
  res.render('body/index', { title: 'FBC Waco College' });
});

/**
 * Route to contact page
 */
router.get('/contact', function(req, res, next) {
    // TODO pull title from database under certain
    res.render('body/basic_pages/contact', { title: 'Contact Us' });
});

/**
 * Route to staff page
 */
router.get('/staff', function(req, res, next) {
    // TODO pull title from database under certain
    res.render('body/basic_pages/staff', { title: 'Staff' });
});

/**
 * Route to Student Leader page
 */
router.get('/leaders', function(req, res, next) {
    // TODO pull title from database under certain
    res.render('body/basic_pages/leaders', { title: 'Leaders' });
});

/**
 * Route to Gathers page
 */
router.get('/gatherings', function(req, res, next) {
    // TODO pull title from database under certain
    res.render('body/basic_pages/gatherings', { title: 'Gatherings' });
});

/**
 * Route to Beliefs page
 */
router.get('/beliefs', function(req, res, next) {
    // TODO pull title from database under certain
    res.render('body/basic_pages/beliefs', { title: 'Beliefs' });
});


module.exports = router;
