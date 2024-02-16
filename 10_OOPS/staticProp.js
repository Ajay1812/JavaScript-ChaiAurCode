class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME: ${this.username}`);
  }

  static createId() {
    // restrict the method - using static
    return `123`;
  }
}

const Ajay = new User("Ajay");
// console.log(Ajay.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Rohit = new Teacher("Rohit", "r1@gmail.com");
Rohit.logMe();
