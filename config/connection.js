var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL){
  connection =mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: "burgers_db"
  });
}

connection.connect();

module.exports = connection;
// create the connection information for the sql database
// var connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "",
//   database: "burgers_db"
// });

// connect to the mysql server and sql database
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
// });

// module.exports = connection;