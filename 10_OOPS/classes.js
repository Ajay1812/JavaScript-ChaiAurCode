// ES6

class User {
  constructor(username, email, password) {
    (this.username = username),
      (this.email = email),
      (this.password = password);
  }
  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}

const Ajay = new User("Ajay", "a@gmail.com", "23124");
console.log(Ajay.encryptPassword());
console.log(Ajay.changeUserName());

// behind the scene

function User1(username, email, password) {
  (this.username = username), (this.email = email), (this.password = password);
}

User1.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

const Rohit = new User1("Rohit", "r.1@gmail.com", "qwe312");
console.log(Rohit.encryptPassword());
