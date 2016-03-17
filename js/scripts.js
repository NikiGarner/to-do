//business logic
//object that stores daily tasks
function dailyTask(day, chores, appointments, dinner) {
  this.day = day-of-the-week;
  this.chores = chores;
  this.appointments = appointments;
  this.dinner = dinner;
}


//user logic
//store user input value

$(document).ready(function() {
  $("form#items").sumbit(function(event){
    event.preventDefault();
    var newItem = $("input#new-item").val();


    $("itemized-list").append("<li><span class='newItem'" + newItem.__() "</span></li")

  });
});
