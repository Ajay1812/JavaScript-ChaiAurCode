const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector(".height").value);
  const weight = parseInt(document.querySelector(".weight").value);
  const results = document.querySelector("#results");
  const bmiguide = document.querySelector("#guide");
  //   console.log(weight);
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    results.innerHTML = `<span>Your BMI : ${bmi}</span>`;
    if (bmi < 18.6) {
      console.log("Under Weight");
      bmiguide.innerHTML = `<span>BMI: ${bmi}, Your Under Weight.</span>`;
    } else if (18.6 <= bmi >= 24.9) {
      console.log("Normal Weight");
      bmiguide.innerHTML = `<span>BMI: ${bmi}, You are in Normal weight range.</span>`;
    } else if (bmi > 24.9) {
      console.log("Over Weight");
      bmiguide.innerHTML = `<span>BMI: ${bmi}, Your Over Weight.</span>`;
    }
  }
});

const myh1 = document.querySelector("h1");
myh1.style.borderRadius = "12px";
myh1.style.backgroundColor = "aquamarine";
myh1.style.color = "blueviolet";
myh1.style.display = "flex";
myh1.style.justifyContent = "center";
myh1.style.alignItems = "center";
