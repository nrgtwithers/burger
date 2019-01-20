// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var ifDevoured = $(this).data("ifDevoured");

    var devouredState = {
      devoured: ifDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("changed sleep to", ifDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger").val().trim(),
      // sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});


// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $(".eatUP").on("click", function(event) {
//       var id = $(this).data("id");
//       var yesEat = $(this).data("yesEat");
  
//       var eaten = {
//         devoured: yesEat
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/burgers/" + id, {
//         type: "PUT",
//         data: eaten
//       }).then(
//         function() {
//           console.log("Burger has been eaten", yesEat);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newBurger = {
//         name: $("#burger").val().trim(),
//         sleepy: $("[name=burger_name]:input").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/api/burgers", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("You added a new burger.");
//           // Reload the page to get the updated list
//           location.reload();
//         });
//     });
//   });