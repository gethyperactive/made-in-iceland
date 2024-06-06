$(document).ready(function(){
  
  $("#fadeOut").click(function(){
    $("#testDiv1").fadeOut(500);
    $("#container").fadeOut(500,function(){ location.href='home/home.html';});
    
  });
  
});