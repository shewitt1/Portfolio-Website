/* about.js */

var Date = new Date();
var hour = Date.getHours()


function daymode() {
    document.getElementById('fullpage').style.backgroundColor = "rgb(253, 230, 237)";
    document.getElementById('burger').style.backgroundColor = "black";
    document.getElementById('section4_header').style.color = "black";
    document.getElementById('overlay').style.backgroundColor = "rgba(253, 220, 229, 0.9)";
    document.getElementById('overlaytext').style.color = "black";
   document.getElementById('overlaytext2').style.color = "black";
   document.getElementById('overlaytext3').style.color = "black";
   document.getElementById('overlaytext4').style.color = "black";
   document.getElementById('project1_info').style.color = "black";
   document.getElementById('project2_info').style.color = "black";
   document.getElementById('project3').style.color = "black";
   document.getElementById('projectlink1').style.color = "gray";
   document.getElementById('projectlink2').style.color = "gray";
   document.getElementById('projectlink3').style.color = "gray";
   document.getElementById('projectlink4').style.color = "gray";

}

function nightmode() {
    document.getElementById('fullpage').style.backgroundColor = "rgb(41, 41, 41)";
    document.getElementById('burger').style.backgroundColor = "white";
    document.getElementById('section4_header').style.color = "white";
    document.getElementById('overlay').style.backgroundColor = "rgba(50, 50, 50,0.9)";
    document.getElementById('overlaytext').style.color = "white";
   document.getElementById('overlaytext2').style.color = "white";
   document.getElementById('overlaytext3').style.color = "white";
   document.getElementById('overlaytext4').style.color = "white";
   document.getElementById('project1_info').style.color = "white";
   document.getElementById('project2_info').style.color = "white";
   document.getElementById('project3').style.color = "white";
   document.getElementById('projectlink1').style.color = "lightgray";
   document.getElementById('projectlink2').style.color = "lightgray";
   document.getElementById('projectlink3').style.color = "lightgray";
   document.getElementById('projectlink4').style.color = "lightgray";




}

function checktime() {
  if (hour > 21 || hour < 9) {
    nightmode();
  } else{
    daymode();
  }

  setInterval(checktime, 6000000)

}
