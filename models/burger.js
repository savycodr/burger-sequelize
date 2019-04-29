// depend on the object relational mapping object
var orm = require("../config/orm");

// The Database Model of a burger. This object knows how to call the ORM to interact with the database to retrive the Burger data.
var burger =  {

  // a function to use the orm to retreive all the tables from the burger database
  // cb - the callback function that holds the results
  all: function(cb){
    // burgers is the name of the table
    orm.selectAll("burgers", function(res){
      // we don't want to do anything with the result until we know that the db query has returned.
      cb(res);
    })
  },

  // a function to use the orm to add a row to the burgers table from the burger database
  // burgerName - the burger_name 
  // cb - the callback function that holds the results
  add:function(burgerName, cb){
    // pass in the burger_name and devoured is false (it is just added it can't have been eaten yet)
    orm.insertOne("burgers", ["burger_name, devoured"], [burgerName, false], function(res){
      // we don't want to do anything with the result until we know that the db query has returned.
      cb(res);
    });
  },

  // a function to use the orm to update a row to the burgers table from the burger database
  // the update should modify the devoured booliean from false to true
  // burgerId - the primary key for the burger that we will update
  // cb - the callback function that holds the results
  update:function(burgerId, cb){
    // pass in the burger's id and set devoured to true 

    var condition = "id=" + burgerId;
    console.log("Updating burger " + condition)
    orm.updateOne("burgers", {devoured: true}, condition, function(res) {
      // we don't want to do anything with the result until we know that the db query has returned.
      cb(res);
    });
  }
}

// Export at the end of the burger.js file.
module.exports = burger;
