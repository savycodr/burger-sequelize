// This server code ties together the Model View Controller files and the Object Relational Mapper files.
// node module to make it easier to serve client files and read requests
var express = require("express");

// Port will be set by the webserver or if localhost will be set to 8080
var PORT = process.env.PORT || 8080;

// This is the method to get a hold of the express middleware
var app = express();

// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

var routes2 = require("./controllers/customer_controller.js");
app.use(routes2);

// require("./controllers/burgers_controller.js")(app);
// require("./controllers/customer_controller.js")(app);



// Syncing our sequelize models and then starting our Express app
// force: true means teh db table will be dropped and recreated at each instance of the server
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
  db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
