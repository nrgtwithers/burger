// // The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// // ["?", "?", "?"].toString() => "?,?,?";
// function printQuestionMarks(num){
//   var arr = [];

//   for(var i = 0; i < num; i++){
//     arr.push("?");
//   }
//   return arr.toString();
// }

// //Helper function to convert obj/key/value pairs to SQL syntax
// function objToSql(ob){
//   var arr=[];
//   //loop through the keys and push the key/value as a string int arr
//   for(var key in ob){
//     var value = ob[key];
//     //check to skip hidden properties
//     if(Object.hasOwnProperty.call(ob, key)){
//       //if string with spaces, add quotations
//       if(typeof value === "string" && value.indexOf("") >= 0) {
//         value = "'" + value + "'";
//       }
//       arr.push(key + "=" + value);
//     }
//   }
//   return arr.toString();
// }

// var orm = {
//     selectAll: function (tableInput, cb) {
//       var queryString = "SELECT * FROM " + tableInput + ";";
//       connection.query(queryString, function(err,results){
//         if(err){
//           throw err;
//         } cb(results);
//       })
//     },
//     insertOne: function (table, cols, vals, cb) {
//       var queryString = "INSERT INTO " + table;
        
//       queryString += " (";
//       queryString += cols.toString();
//       queryString += " )";
//       queryString += "VALUES (";
//       queryString += printQuestionMarks(vals.length);
//       queryString += " )";

//       console.log(queryString);

//       connection.query(queryString, vals, function(err,result){
//         if (err){
//           throw err;
//         }
//         cb(result);
//       })
//     },
//     updateOne: function (table, obColVals, condition, cb) {
//       var queryString = "UPDATE" + table;

//       queryString += " SET ";
//       queryString += objToSql(obColVals);
//       queryString += " WHERE ";
//       queryString += condition;

//       console.log(queryString);

//         connection.query(queryString, function(err,result){
//           if(err){
//             throw err;
//           }
//           cb(result);
//         })
//     },
// }

var connection = require("../config/connection.js");

var orm = {
    selectAll: function (callback) {
        connection.query("SELECT * FROM burgers", function (err, res) {
            if (err) throw err;
            callback(res);
        })
    }, 
    insertOne: function (burger_name, callback) {
      console.log("orm", burger_name)
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
}

module.exports = orm;