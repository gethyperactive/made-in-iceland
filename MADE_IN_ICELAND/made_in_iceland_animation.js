$(document).ready(function(){
  
    $("#home").click(function(){
        $(".platform").fadeOut(100);
        $("nav").fadeOut(500);
        $(".menu-toggle").fadeOut(500,function(){ location.href='../home/home.html';});
      
    });
    
    $("#about").click(function(){
        $(".platform").fadeOut(100);
        $("nav").fadeOut(500);
        $(".menu-toggle").fadeOut(500,function(){ location.href='../about_iceland/about_iceland.html';});
      
    });

    $("#made").click(function(){
        $(".platform").fadeOut(100);
        $("nav").fadeOut(500);
        $(".menu-toggle").fadeOut(500,function(){ location.href='made_in_iceland.html';});
      
    });

    $("#travel").click(function(){
        $(".platform").fadeOut(100);
        $("nav").fadeOut(500);
        $(".menu-toggle").fadeOut(500,function(){ location.href='../about_travel/about_travel.html';});
      
    });
  });