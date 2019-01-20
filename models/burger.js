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
    insertOne: function (burger_name, callback) {
        console.log("burger", burger_name)
        orm.insertOne([burger_name], function(res) {
            callback(res);
        })
    },
    updateOne: function (id, callback){
        orm.updateOne([id], function(res){
            callback(res);
        })
    },
    deleteOne: function(id, callback){
        orm.deleteOne([id], function(res){
            callback(res);
        })
    }
}

module.exports = burger;