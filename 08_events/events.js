// document.getElementById("owl").onclick = () => {
//   alert("Owl");
// };

// attachEvent()
// jQuery - on eventlistener

//type, timestamp, defaultPrevented
// target, toElement, srcElement, currentElement
// clientX , clinetY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// document.getElementById("images").addEventListener(
//   "click",
//   (e) => {
//     console.log("Click inside ul");
//   },
//   true
// );

// document.getElementById("owl").addEventListener(
//   "click",
//   (e) => {
//     console.log("owl");
//     // e.stopPropagation(); //true
//   },
//   true // capturing when its true first it take the outer element than it will dig into elements - > ul->li->img
// );

// // it is false we called it bubbling, it go from inner element to outer element -> img->li->ul->div

// document.getElementById("google").addEventListener(
//   "click",
//   (e) => {
//     e.preventDefault();
//     // e.stopPropagation();
//     console.log("Google Clicked");
//   },
//   false
// );
document.querySelector("#images").addEventListener("click", (e) => {
  // console.log(e.target.parentNode); // target -> parent node -> li
  console.log(e.target.tagName);
  if (e.target.tagName == "IMG") {
    console.log(e.target.id);
    let removeImg = e.target.parentNode;
    removeImg.remove();
  } else {
  }
  // removeImg.parentNode.removeChild(removeImg);
});
