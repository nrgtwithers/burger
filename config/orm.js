var connection = require("../config/connection.js");

var orm = {
    selectAll: function (callback) {
    connection.query("SELECT * FROM burgers", function(err, res){
        if (err) throw err;
        callback(res);
    })
    },
    insertOne: function () {
    
    },
    updateOne: function() {

    },
    name: "nina"
}

module.exports = orm;