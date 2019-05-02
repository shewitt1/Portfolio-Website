/* script.js */

var i = 0;
var txt = "Cybersecurity Enthusiast & Web Developer";
var speed = 70; /* sets speed of typing effect */

var Date = new Date();
var hour = Date.getHours()

function typewriter_effect() {
  /* loop that prints out the txt var letter by letter */
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter_effect, speed);
  }
}

function daymode() {
    document.getElementById('fullpage').style.backgroundColor = "rgb(253, 230, 237)";
    document.getElementById('bio').style.color = "black";
    document.getElementById('modemenu').style.backgroundColor = "rgba(253, 220, 229, 0.9)";
    document.getElementById('mode').style.color = "black";
    document.getElementById('modetext2').style.color = "black";
    document.getElementById('burger').style.backgroundColor = "black";
    document.getElementById('button').style.backgroundColor = "rgba(253, 220, 229, 0.9)";
   document.getElementById('button').style.color = "black";
   document.getElementById('button2').style.backgroundColor = "rgba(253, 220, 229, 0.9)";
   document.getElementById('button2').style.color = "black";
   document.getElementById('overlay').style.backgroundColor = "rgba(253, 220, 229, 0.9)";
   document.getElementById('overlaytext').style.color = "black";
   document.getElementById('overlaytext2').style.color = "black";
   document.getElementById('overlaytext3').style.color = "black";
   document.getElementById('overlaytext4').style.color = "black";
   document.getElementById('github').src = "./media/github.svg";
  document.getElementById('linkedin').src = "./media/linkedin.svg";
  document.getElementById('email').src = "./media/mail.svg";
  document.getElementById('resume').src = "./media/img_542830.png";
}

function nightmode() {
    document.getElementById('fullpage').style.backgroundColor = "rgb(41, 41, 41)";
    document.getElementById('bio').style.color = "white";
    document.getElementById('mode').style.color = "white";
    document.getElementById('modetext2').style.color = "white";
   /* document.getElementsByTagName('a').style.backgroundColor = "white";*/
   document.getElementById('modemenu').style.backgroundColor = "rgba(50, 50, 50,0.9)";
   document.getElementById('burger').style.backgroundColor = "white";
   document.getElementById('button').style.backgroundColor = "rgba(50, 50, 50,0.9)";
   document.getElementById('button').style.color = "white";
   document.getElementById('button2').style.backgroundColor = "rgba(50, 50, 50,0.9)";
   document.getElementById('button2').style.color = "white";
   document.getElementById('overlay').style.backgroundColor = "rgba(50, 50, 50,0.9)";
   document.getElementById('overlaytext').style.color = "white";
   document.getElementById('overlaytext2').style.color = "white";
   document.getElementById('overlaytext3').style.color = "white";
   document.getElementById('overlaytext4').style.color = "white";
  document.getElementById('github').src = "./media/githubwhite.png";
  document.getElementById('linkedin').src = "./media/linkedinwhite.png";
  document.getElementById('email').src = "./media/mailwhite.png";
  document.getElementById('resume').src = "./media/resumewhite.png";



   
}

function checktime() {

}
