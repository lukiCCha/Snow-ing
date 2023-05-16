const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const body = document.querySelector("body");

function createRain(){
  const rain = document.createElement("div");

  rain.classList.add("rain");

  rain.style.left = Math.random() * 200 + "vh";
  rain.style.animationDuration = Math.random() * 2 + 5  + 1 + "s";
  rain.style.fontSize = Math.random() * 22 + 20 + "px";
  
  rain.innerText = "*"

  document.body.appendChild(rain);
}

setInterval(createRain, 50);

moon.addEventListener("click", () => {
  moon.style.display = "none";
  body.style.background = "linear-gradient(55deg, #ffdb00, #ff8c00)";
  body.style.transition = "0.5s";
  sun.style.display = "block";
});

sun.addEventListener("click", () => {
  moon.style.display = "block";
  body.style.background = "linear-gradient(to top,#00003d,#00002e,black, black)";
  sun.style.display = 'none';
});