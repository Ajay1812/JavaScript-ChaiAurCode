function randomHexColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random(0, 16) * 16)];
  }
  return color;
}

function startChangeColor() {
  document.body.style.backgroundColor = randomHexColor();
  document.querySelector("h2").style.color = "white";
}

let intervalID;
const bgStart = function bgStartColor() {
  if (intervalID == null) {
    intervalID = setInterval(startChangeColor, 1000);
  }
};

const bgStop = function stopChangeColor() {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector("#start").addEventListener("click", bgStart);
document.querySelector("#stop").addEventListener("click", bgStop);
