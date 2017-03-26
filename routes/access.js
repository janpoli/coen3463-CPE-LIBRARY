var express = require('express');
var router = express.Router();
var Lib = require('../model/libs');
var Item = require('../model/item');
var moment = require('moment-timezone');
var User = require('../model/user');

router.use(function(req, res, next) {
  if (!req.user) {
    res.redirect('/')
  }
  next();
});

router.get('/', function(req, res) {
  Lib.find( function(err, data, count) {
    res.render('libs', {libs: data,user:req.user});
  })
});
router.post('/', function(req, res){
  res.redirect('/access')
});


router.route('/:libId')
  .all(function(req, res, next) {
    libId = req.params.libId;
    lib = {};
    Lib.findById(libId, function(err, data) { 
      lib = data;
      Item.find(function(err,data){
      items = [];
      if(err){
        res.render('libdata', {error: err});
      }
      else{
        items = data;
      }
      if(data){
        next();
      }
      });
      
    });
    
  })
  .get(function(req, res) {
    res.render('libdata', {libdata: lib, moment:moment,items: items,user:req.user});
  })


module.exports = router;
