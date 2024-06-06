$(document).ready(function(){
  
    $("#home").click(function(){
        $("nav").fadeOut(500);
        $("#top").fadeOut(100);
        $("#cl").fadeOut(100);
        $(".menu-toggle").fadeOut(500,function(){ location.href='home.html';});
      
    });
    
    $("#about").click(function(){
        $("nav").fadeOut(500);
        $("#top").fadeOut(100);
        $("#cl").fadeOut(100);
        $(".menu-toggle").fadeOut(500,function(){ location.href='../about_iceland/about_iceland.html';});
      
    });

    $("#made").click(function(){
        $("nav").fadeOut(500);
        $("#top").fadeOut(100);
        $("#cl").fadeOut(100);
        $(".menu-toggle").fadeOut(500,function(){ location.href='../made_in_iceland/made_in_iceland.html';});
      
    });

    $("#travel").click(function(){
        $("nav").fadeOut(500);
        $("#top").fadeOut(100);
        $("#cl").fadeOut(100);
        $(".menu-toggle").fadeOut(500,function(){ location.href='../about_travel/about_travel.html';});
      
    });
  });