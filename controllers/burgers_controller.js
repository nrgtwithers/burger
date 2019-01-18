var burger = require("../models/burger.js");
var express = require('express');
var router = express.Router();

// app.get("/", function(req, res) {
//     cat.all()
//       .then(function(data){
//         res.render("index", { cats: data });
//       })
//       .catch(function(err){
//         console.log(err);
//       });
//   });

router.get('/', function(req, res){
    burger.selectAll(function(data){
        res.render("index",{burgers:data});
    })
})

// app.post("/api/cats", function(req, res) {
//     cat.create(req.body.name, req.body.sleepy)
//       .then(function(data){
//         res.json({ id: data.insertId });
//       })
//       .catch(function(err){
//         console.log(err);
//       });
//   });

router.post('/add', function(req,res){
    burger.insertOne(function(data){
        res.render("index",{burgers:data})
    })
})

// app.put("/api/cats/:id", function(req, res) {
//     let sleepy = (req.body.sleepy == 'true');
//     cat.update(sleepy, req.params.id)
//       .then(function(data){
//         if (data.changedRows == 0) {
//           // If no rows were changed, then the ID must not exist, so 404
//           return res.status(404).end();
//         } else {
//           res.status(200).end();
//         }
//       })
//       .catch(function(err){
//         console.log(err);
//       });
//   });

router.put('/update', function(req,res){
    burger.updateOne(function(data){
        res.render('index', {burgers:data})
    })
})

module.exports = router;