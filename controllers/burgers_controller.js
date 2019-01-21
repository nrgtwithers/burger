var burger = require("../models/burger.js");
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    })
})

router.post('/api/burgers', function (req, res) {
    // console.log(req.body)
    burger.insertOne([req.body.burger_name], function (data) {
        res.render("index", data);
    })
})

router.put('/api/burgers/:id', function (req, res) {
    // console.log(req.params.id)
    burger.updateOne([req.params.id], function (data) {
        res.render("index", data);
    })
})

router.delete("/api/burger/delete/:id", function(req,res){
    // console.log(req.params.id);
    burger.deleteOne([req.params.id], function(data){
        res.render("index", data)
    })
})

module.exports = router;