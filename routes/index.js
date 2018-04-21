let express = require('express');
let router = express.Router();

/* GET home page. */
// noinspection JSUnusedLocalSymbols
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
