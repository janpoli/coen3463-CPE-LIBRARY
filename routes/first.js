var express = require('express');
var router = express.Router();
var Lib = require('../model/libs');
var Item = require('../model/item');
var moment = require('moment-timezone');
var User = require('../model/user');

router.use(function(req, res, next) {
  if (!req.user) {
    res.redirect('/auth/login')
  }
  next();
});

router.get('/', function(req, res){
  res.render('libs', {user:req.user});
});


module.exports = router;
