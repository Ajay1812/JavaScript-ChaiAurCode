// document.getElementById("owl").onclick = () => {
//   alert("Owl");
// };

// attachEvent()
// jQuery - on eventlistener

//type, timestamp, defaultPrevented
// target, toElement, srcElement, currentElement
// clientX , clinetY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

document.getElementById("images").addEventListener(
  "click",
  (e) => {
    console.log("Click inside ul");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  (e) => {
    console.log("owl");
  },
  false
);
