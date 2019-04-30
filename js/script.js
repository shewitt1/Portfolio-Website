/* script.js */

var i = 0;
var txt = "Cybersecurity Enthusiast & Web Developer";
var speed = 70; /* sets speed of typing effect */

function typewriter_effect() {
  /* loop that prints out the txt var letter by letter */
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typewriter_effect, speed);
  }
}
