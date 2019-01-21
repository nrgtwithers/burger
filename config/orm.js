var connection = require("../config/connection.js");

var orm = {
    selectAll: function (callback) {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            callback(res);
        })
    }, 
    insertOne: function (burger_name, callback) {
      // console.log("orm", burger_name)
        connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?,?)", [burger_name, 0], function (err, res) {
            if (err) throw err;
            callback(res);
            // console.log(res);
        })
    },
    updateOne: function (id, callback) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?",[id], function (err, res) {
            if (err) throw err;
            callback(res);
        })
    },
    
    deleteOne: function (id, callback){
      connection.query("DELETE FROM burgers WHERE id = ?", [id],
      function(err,res){
        if (err) throw err;
        callback(res);
      })
    }
    
}

module.exports = orm;