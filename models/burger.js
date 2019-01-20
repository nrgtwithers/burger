//declarations
const orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM.
// const cat = new orm("burgers");

var burger = {
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        })
    },
    insertOne: function (callback) {
        orm.insertOne(function (res) {
            callback(res);
        })
    },
    updateOne: function (callback){
        orm.updateOne(function(res){
            callback(res);
        })
    }
}

module.exports = burger;