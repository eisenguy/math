let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

module.exports = router;
