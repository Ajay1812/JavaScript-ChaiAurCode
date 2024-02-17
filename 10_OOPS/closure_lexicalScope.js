function makeFunc() {
  const name = "Mozilla";
  console.log("Outer: ", name);
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFunc = makeFunc();
myFunc();
