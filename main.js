let color1 = document.getElementById("stopLight")
let color2 = document.getElementById("slowLight")
let color3 = document.getElementById("goLight")
let button1 = document.getElementById("stopButton")
let button2 = document.getElementById("slowButton")
let button3 = document.getElementById("goButton")

button1.addEventListener("click", () => {
  color1.style.backgroundColor = "red"
  color2.style.backgroundColor = "black"
  color3.style.backgroundColor = "black"


});


button2.addEventListener("click", () => {
  color2.style.backgroundColor = "yellow"
  color3.style.backgroundColor = "black"
  color1.style.backgroundColor = "black"


});



button3.addEventListener("click", () => {
  color3.style.backgroundColor = "green"
  color1.style.backgroundColor = "black"
  color2.style.backgroundColor = "black"


});



