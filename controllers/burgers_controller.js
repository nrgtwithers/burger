var burger = require("../models/burger.js");
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    burger.selectAll(function(data){
        res.render("index",{burgers:data});
    })
})

module.exports = router;