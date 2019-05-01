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
    document.getElementById('sections').style.backgroundColor == "blue";
}

function nightmode() {

}

function checktime() {

}
