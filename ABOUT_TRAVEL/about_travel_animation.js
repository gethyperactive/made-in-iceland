$(document).ready(function(){
  
    $("#home").click(function(){
        $(".band").fadeOut(100);
        $("nav").fadeOut(500);
        $(".menu-toggle").fadeOut(500,function(){ location.href='../home/home.html';});
      
    });
    
    $("#about").click(function(){
        $(".band").fadeOut(100);
        $("nav").fadeOut(500);
        $(".menu-toggle").fadeOut(500,function(){ location.href='../about_iceland/about_iceland.html';});
      
    });

    $("#made").click(function(){
        $(".band").fadeOut(100);
        $("nav").fadeOut(500);
        $(".menu-toggle").fadeOut(500,function(){ location.href='../made_in_iceland/made_in_iceland.html';});
      
    });

    $("#travel").click(function(){
        $(".band").fadeOut(100);
        $("nav").fadeOut(500);
        $(".menu-toggle").fadeOut(500,function(){ location.href='about_travel.html';});
      
    });
  });