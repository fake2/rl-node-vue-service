var express = require('express');
var router = express.Router();


const originController = require('../controllers').origin;

router.get('/api/origin', originController.list);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
