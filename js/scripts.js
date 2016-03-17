//business logic
//object that stores daily tasks
function Food(userInput) {
  this.groceries = groceries;
}

Food.prototype.item = function () {
  return this.groceries;
}
//user logic
//store user input value

$(document).ready(function() {
  $("form#groceries").sumbit(function(event){
    event.preventDefault();
    var userInput = $("input#new-item").val();

    var newItem = new Food(groceries);


    $("itemized-list").append("<li><span class='food-item'" + newItem.item() "</span></li")

  });
});
