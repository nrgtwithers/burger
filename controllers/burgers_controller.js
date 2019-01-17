var burger = require("../models/burger.js");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    burger.selectAll(function(data){
        res.render("index",{burgers:data});
    })
})

router.post('/add', function(req,res){
    burger.insertOne(function(data){
        res.render("index",{burgers:data})
    })
})

router.put('/update', function(req,res){
    burger.updateOne(function(data){
        res.render('index', {burgers:data})
    })
})

module.exports = router;