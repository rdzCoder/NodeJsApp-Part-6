var express = require("express");

var router = express.Router();


//TODO:: add in error and info 

router.use(function(req,res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.info = req.flash("info");

    next();
});


router.use("/", require("./home"));
router.use("/posts", require("./post"));



module.exports = router;
