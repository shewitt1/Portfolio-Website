/* about.js */

var Date = new Date();
var hour = Date.getHours()


function daymode() {
    document.getElementById('fullpage').style.backgroundColor = "rgb(253, 230, 237)";
    document.getElementById('burger').style.backgroundColor = "black";
    document.getElementById('section2_header').style.color = "black";
    document.getElementById('about_text').style.color = "black";
    document.getElementById('skills_header').style.color = "black";
    document.getElementById('overlay').style.backgroundColor = "rgba(253, 220, 229, 0.9)";
    document.getElementById('overlaytext').style.color = "black";
   document.getElementById('overlaytext2').style.color = "black";
   document.getElementById('overlaytext3').style.color = "black";
   document.getElementById('overlaytext4').style.color = "black";

}

function nightmode() {
    document.getElementById('fullpage').style.backgroundColor = "rgb(41, 41, 41)";
    document.getElementById('burger').style.backgroundColor = "white";
    document.getElementById('section2_header').style.color = "white";
    document.getElementById('about_text').style.color = "white";
    document.getElementById('skills_header').style.color = "white";
    document.getElementById('overlay').style.backgroundColor = "rgba(50, 50, 50,0.9)";
    document.getElementById('overlaytext').style.color = "white";
   document.getElementById('overlaytext2').style.color = "white";
   document.getElementById('overlaytext3').style.color = "white";
   document.getElementById('overlaytext4').style.color = "white";
}

function checktime() {
  if (hour > 21 || hour < 9) {
    nightmode();
  } else{
    daymode();
  }

  setInterval(checktime, 6000000)

}
