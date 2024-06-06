function showClock(){
    var divClock = document.getElementById("divClock");
    var currentDate = new Date();
    currentDate.toUTCString();
    var msg = "Now Iceland \n";
    var mon = currentDate.getUTCMonth() + 1;
    var date =  currentDate.getUTCDate();
    var hour = currentDate.getUTCHours();
    var min = currentDate.getUTCMinutes();
    var sec = currentDate.getUTCSeconds();

if (hour.toString().length==1) hour = "0" + hour;
if (min.toString().length==1) min = "0" + min;
if (sec.toString().length==1) sec = "0" + sec;
    msg += mon + " / ";
    msg += date + " \n";
    msg += hour +" : ";
    msg += min +" : ";
    msg += sec +"";
    

    divClock.innerText = msg;

    setTimeout(showClock,1000);
  }