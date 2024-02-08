const clock_span = document.querySelector("span");

// function clock() {
//   const time = new Date().toLocaleString("default", {
//     hourCycle: "h12",
//     timeStyle: "medium",
//   });
//   //   console.clear();
//   //   console.log(time);
//   clock_span.innerHTML = time;
// }

// setInterval(clock, 1000);

// console.log("Hello");

setInterval(() => {
  let clock = new Date();
  clock_span.innerHTML = clock.toLocaleTimeString("default", {
    hourCycle: "h12",
    timeStyle: "medium",
  });
}, 1000);
