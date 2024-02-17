// console.log(Math.PI);

const pi = Object.getOwnPropertyDescriptor(Math, "PI");

pi.writable = true;

pi.value = 5;

// console.log(pi);

const newObj = {
  name: "Ajay",
  chai: true,
  orderChai: function () {
    console.log("Chai nhi ban paayegi");
  },
};

console.log(Object.getOwnPropertyDescriptor(newObj, "name"));

Object.defineProperties(newObj, "name", {
  writable: false,
  enumerable: false, // can not apply loop on this object from  now
});

for (const key in newObj) {
  if (typeof value !== "function") {
    console.log(`${key}: ${newObj[key]}`);
  }
}
