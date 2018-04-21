let express = require('express');
let router = express.Router();
let passport = require('passport');

router.get('/', function(req, res, next) {
    let myMsg = req.flash();
    res.render('login', {title: "Log in", message: myMsg['error']});
});

router.post('/', passport.authenticate('local', {
        successReturnToOrRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);

module.exports = router;
