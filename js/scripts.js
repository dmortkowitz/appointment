$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var time = $("#time").val();
    $("span.firstName").text(firstName);
    $("span.lastName").text(lastName);
    $("span.description").text(description);
    $("span.date").text(date);
    $("span.time").text(time);


    event.preventDefault();
  });

});
