const button = document.querySelectorAll(".btn");
const body = document.querySelector("body");

button.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

const myh1 = document.querySelector("h1");
myh1.style.borderRadius = "12px";
myh1.style.backgroundColor = "aquamarine";
myh1.style.color = "blueviolet";
myh1.style.display = "flex";
myh1.style.justifyContent = "center";
myh1.style.alignItems = "center";
