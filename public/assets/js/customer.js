$(document).ready(function() {
  // Getting references to the name input and customer container, as well as the table body
  var nameInput = $("#customer-name");
  // Adding event listeners to the form to create a new object, and the button to delete
  $(document).on("submit", "#customer-form", handleCustomerFormSubmit);
  $(document).on("click", ".delete-customer", deleteCustomer);

  // Getting the initial list of Authors
  // getAuthors();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleCustomerFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (!nameInput.val().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertCustomer({
      name: nameInput
        .val()
        .trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertCustomer(customerData) {
    $.post("/api/customers", customerData)
    .then(
      function() {
        console.log("created new customer");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }


  // A function for deleting a customer. 
  function deleteCustomer() {
    console.log("TEST< TEST<TEST");
    var cID = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/customers/" + cID
    })
      .then(      function() {
        console.log("deleted  customer");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }
  



  // Function for handling what to render when there are no authors
  // function renderEmpty() {
  //   var alertDiv = $("<div>");
  //   alertDiv.addClass("alert alert-danger");
  //   alertDiv.text("You must create an Author before you can create a Post.");
  //   authorContainer.append(alertDiv);
  // }

});
