// let name = "Ajay       ";
// console.log(name.trim().length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderManPower: function () {
    console.log("Spidy power is ${this.spiderman}");
  },
};

Object.prototype.Ajay = function () {
  console.log("Ajay is in all objects");
};

Array.prototype.Yoyo = function () {
  console.log("Yo Yo Honey Singh");
};

// heroPower.Ajay();
// myHeros.Ajay();
// myHeros.Yoyo();
// heroPower.Yoyo(); // Error: object can not access this array property but array can acess object .

// inheritance

const user = {
  username: "ajay",
  email: "a.kumar01c@gmail.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvaiable: true,
};

const TAsupport = {
  makeAssignment: "JS",
  fulltime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "Rohit      ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"               Ajay   ".trueLength();
