// Set up MySQL connection.
var mysql = require("mysql");

var connection;

// Notice	process.env.JAWSDB_URL lets	us	plug	in	your	connection	details	with	just	one	object	property.	When	you set	up	the	JawsDB	provision,	Heroku	saved	the	connection	info	in	an	environmental	variable (your credentials are well hidden)
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
