class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    return `Username is ${this.username}`;
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const Ajay = new Teacher("Ajay", "a@gmail.com", "231ax");
// Ajay.addCourse();

const Rohit = new User("Rohit");
console.log(Rohit.logMe());

console.log(Rohit instanceof User); // true
