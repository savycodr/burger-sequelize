// import express and router middleware
var express = require("express");
var router = express.Router();
// import the burger javascript object which knows how to communicate to the database
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes.
// Set up the home page
router.get("/", function(req, res) {
  // get all of the items from the burgers table
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    // call for the index.handlebars view
    res.render("index", hbsObject);
  });
});

// this route will take the new burger info and write it to the database
// the req.body.name should hold the new burger_name
router.post("/api/burgers", function(req, res) {

  console.log("The name of the new burger is " + req.body.burger_name);
  burger.add( req.body.burger_name, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

// This put call will get the primary key of the burger from the api parameter
// It will update that burger's devoured field to true.
router.put("/api/burgers/:id", function(req, res) {
  var burgerId = req.params.id;

  // console.log("burgerId", burgerId);

  burger.update( burgerId, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// export the router
module.exports = router;
