const user = {
  id: 1,
  username: "Ajay",
  loginCount: 5,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Get user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this); // current context
  },
};

// console.log(user);
// console.log(user.getUserDetails());
// console.log(this); // empty {} -> node enviroment but in browser we get window object

// const promisOne = new Promise(); // constructor
// const date = new Date(); // constructor

function User(username, loginCount, loggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.loggedIn = loggedIn;

  this.greeting = () => {
    console.log(`Welcom, ${this.username}`);
  };

  //   return this; it will work without this
  return this;
}

const userOne = new User("Ajay", 10, true);
const userTwo = new User("Rohit", 4, false);
const userThree = new User("Mummy", 5, true);

console.log(userOne.constructor); // refrence value of itself
// console.log(userTwo);
// console.log(userThree);
