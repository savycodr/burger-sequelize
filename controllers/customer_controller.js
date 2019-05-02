// import express and router middleware
var express = require("express");
var router = express.Router();
// Requiring our models
var db = require("../models");

// Create all our routes and set up logic within those routes.
// Set up the home page
router.get("/customers", function(req, res) {
  // get all of the items from the burgers table
  db.Customer.findAll({
    include: [db.Burger]
  }).then(function(data) {
    var hbsObject = {
      customers: data
    };
    console.log("Customer controller " + JSON.stringify(hbsObject));
    // call for the index.handlebars view
    res.render("customer-manager", hbsObject);
  });
});

// this route will take the new burger info and write it to the database
// the req.body.name should hold the new burger_name
router.post("/api/customers", function(req, res) {

  console.log("The name of the new customer is " + req.body.name);
  db.Customer.create({
    name: req.body.name,
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


// this route will take the new burger info and write it to the database
// the req.body.name should hold the new burger_name
router.delete("/api/customers/:id", function(req, res) {

  console.log("The id of the customer to delete is " + req.params.id);
  db.Customer.destroy({
    where:{
      id: req.params.id
    }
  }).then(function(dbTodo) {
    // We have access to the new burger as an argument inside of the callback function
    res.json(dbTodo);
  })
    .catch(function(err) {
    // Whenever a validation or flag fails, an error is thrown
    // We can "catch" the error to prevent it from being "thrown", which could crash our node app
    console.log("An error occurred during delete");
    console.log(err);
      res.json(err);
    });
});

// export the router
module.exports = router;
