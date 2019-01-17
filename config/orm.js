var connection = require("../config/connection.js");

var orm = {
    selectAll: function (callback) {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            callback(res);
        })
    },
    insertOne: function (callback) {
        connection.query("INSERT FROM burgers SET ?", function (err, res) {
            if (err) throw err;
            callback(res);
        })
    },
    updateOne: function () {
        connection.query("'UPDATE burgers SET ? WHERE ?'", function (err, res) {
            if (err) throw err;
            callback(res);
        })
    },
    name: "nina"
}

module.exports = orm;