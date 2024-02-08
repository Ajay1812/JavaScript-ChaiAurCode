const clock_div = document.querySelector("span");

function clock() {
  const time = new Date().toLocaleString("default", {
    hourCycle: "h12",
    timeStyle: "medium",
  });
  //   console.clear();
  //   console.log(time);
  clock_div.innerHTML = time;
}

setInterval(clock, 1000);

console.log("Hello");
