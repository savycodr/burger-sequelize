// import express and router middleware
var express = require("express");
var router = express.Router();
// Requiring our models
var db = require("../models");

// Create all our routes and set up logic within those routes.
// Set up the home page
router.get("/", function(req, res) {
  // get all of the items from the burgers table
  db.Burger.findAll({}).then(function(data) {
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
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: false
  }).then(function(dbTodo) {
    // We have access to the new burger as an argument inside of the callback function
    res.json(dbTodo);
  })
    .catch(function(err) {
    // Whenever a validation or flag fails, an error is thrown
    // We can "catch" the error to prevent it from being "thrown", which could crash our node app
      res.json(err);
    });
});

// This put call will get the primary key of the burger from the api parameter
// It will update that burger's devoured field to true.
router.put("/api/burgers/:id", function(req, res) {

  console.log("burgerId", req.params.id);
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    // Update the devoured flag to true
    db.Burger.update(
      {
      devoured: true
      }, 
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbTodo) {
      res.json(dbTodo);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });


});

// export the router
module.exports = router;
