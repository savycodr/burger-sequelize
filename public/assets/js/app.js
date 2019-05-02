// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

// listen to the form with the class="add-burger" for a submit button
// then do a POST which will insert the new burger into the database
  $(".add-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("THE SUBMIT HAS BEEN HIT");

    // Get the burger input and make sure it is not null
    var bName = $("#burger");
    // Error handling if the burger name was not input
    if ((!bName.val()) || (bName.val().trim() === "")){
      $("#validNameFeedback").text("Please Enter a Burger");
      return;
    }

    // Get the burger input and make sure it is not null

    var cName = $("#customerFormControlSelect1 option:selected");
    // Error handling if the burger name was not input
    if ((!cName.val()) || (cName.val().trim() === "")){
      $("#validNameFeedback").text("Please Enter a Customer");
      return;
    }
    var cId = cName.data("id");
    console.log("The cusotmer nAME is " + cName);
    console.log("The cusotmer id is " + cId);
      var burger = {
      burger_name: bName.val().trim(),
      CustomerId: cId
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: burger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

// Update happens whenever the devour this button is selected
// We will use the parameter of the api call to pass the id
  $(".eatBurger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    var id = $(this).data("id");
    console.log("YOU have submited a Devour THis " + id);
    // Send the POST request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(
      function() {
        console.log("devoured burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})