var express = require('express');
var router = express.Router();
var Lib = require('../model/libs');
var Item = require('../model/item');
var moment = require('moment-timezone');
var User = require('../model/user');

router.use(function(req, res, next) {
  if(!req.user){
    res.redirect('/auth/login')
  }else if(req.user.auth!=='admin') {
    res.redirect('/access')
  }
  next();
});

router.post('/add', function(req, res) {
    new Lib ({
      name: req.body.name,
	    code: req.body.code,
	    year: req.body.year,
      sem: req.body.sem,
	    createdate: moment().tz("Asia/Manila").format('LLL'),
    }).save(function(err, data, count) {
      if(err) {
        console.log(err)
        res.render('add', {error:err})
      } else {
        res.redirect('/access')
      }
    })
});

router.get('/add', function(req, res) {
  res.render('add', {data: {}});
});
	
router.get('/edit/users', function(req, res) {
  User.find( function(err, data, count) {
    res.render('users', {users: data});
  })
});

router.route('/edit/users/delete/:id')
  .all(function(req, res, next) {
    userId = req.params.id;
    user = {};
    User.findById(userId, function(err, c) {
      user = c;
      next();    
    });
  })
  .get(function(req, res) {
    user.remove((err,item)=>{
            if(err){
                console.log(err);
            }else{
              console.log('delete user success')
              res.redirect('/libs/edit/users')
            }
        });
  });

router.route('/edit/users/modify/:id')
  .all(function(req, res, next) {
    userId = req.params.id;
    user = {};
    User.findById(userId, function(err, data) {
      user = data;
      next();
    });
  })
  .get(function(req, res) {
    res.render('editusers', {update: user});
  })
  .post(function(req, res) {
    user.username = req.body.username,
    user.first_name = req.body.first_name,
    user.last_name = req.body.last_name,
    user.email = req.body.email,
    user.auth = req.body.auth,
    user.save(function(err, data, count) {
      if(err) {
        // res.status(400).send('Error saving data: ' + err);
        console.log(err)
        res.render('update', {update: lib, error:err})
      } else {
        res.redirect('/libs/edit/users');
      }
    });
  })



router.route('/:libId/update')
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
      if(data)
      {next();}
      });
      
    });
  })
  .get(function(req, res) {
    res.render('update', {update: lib,items:items, moment:moment});
  })
  .post(function(req, res) {
    lib.name = req.body.name,
    lib.code = req.body.code,
    lib.year = req.body.year,
    lib.sem = req.body.sem,
    lib.updatedate = moment().tz("Asia/Manila").format('LLL'),
    lib.save(function(err, data, count) {
      if(err) {
        // res.status(400).send('Error saving data: ' + err);
        console.log(err)
        res.render('update', {update: lib, error:err})
      } else {
        res.redirect('/access/'+libId);
      }
    });
  })

router.route('/:libId/itemnew')
  .all(function(req, res, next) {
    libId = req.params.libId;
    lib = {};
    Lib.findById(libId, function(err, data) {
      lib = data;
      next();
    });
    
  })
  .post(function(req,res){
  new Item({
      description: req.body.description,
      type: req.body.type,
      link: req.body.link,
      lib: lib.code,
      createdate: moment().tz("Asia/Manila").format('LLL'),
    }).save(function(err, data, count) {
      if(err) {
        console.log(err)
        res.render('itemnew', {error:err})
      } else {
        // res.send("New Data created");
        res.redirect('/access/'+libId)
      }
    })
  })
  .get(function(req, res) {
    res.render('itemnew', {lib: lib, moment:moment});
  })
  
  

router.route('/:libId/delete')
  .all(function(req, res, next) {
    libId = req.params.libId;
    lib = {};
    Lib.findById(libId, function(err, c) {
      lib = c;
      next();
    });
  })
  .get(function(req, res) {
    lib.remove(function(err, data) {
      if(err) {
        res.status(400).send("Error removing data: " + err);
      } else {
        // res.send('Data removed');
        res.redirect('/access');
      }
    });
  });

router.route('/delete/:libId/:id')
  .all(function(req, res, next) {
    libId = req.params.libId;
    lib = {};
    Lib.findById(libId, function(err, c) {
      lib = c;
      
      Item.findById(req.params.id,(err,items)=>{
        if(err){
           console.log(err);
        }else{
          item = items;
        }
        if(items)
      {next();}
    });
    
    });
  })
  .get(function(req, res) {
    item.remove((err,item)=>{
            if(err){
                console.log(err);
            }else{
              console.log('delete success')
              res.redirect('/libs/'+libId+'/update')
            }
        });
  });


module.exports = router;
