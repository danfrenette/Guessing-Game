$(function(){
  $("#dog").click(sayYes)
  $("#cat").click(sayNo)

});

function sayYes() {
  $("#result").text("Yes")
}


function sayNo() {
  $("#result").text("No")
}

