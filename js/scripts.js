//business logic
function List(chores, appointments, dinner) {
  this.chores = chores;
  this.appointments = appointments;
  this.dinner = dinner;
}

//user logic
$(document).ready(function() {
  $("form#items").sumbit(function(event){
    event.preventDefault();

  });
});
