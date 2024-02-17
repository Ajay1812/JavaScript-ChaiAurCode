class User {
  constructor(email, password) {
    (this.email = email), (this.password = password);
  }
  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value.toLowerCase();
  }
  get password() {
    return this._password.toUpperCase();
  }
  set password(value) {
    this._password = value.toUpperCase();
  }
}

const Ajay = new User("nFQWERTY@gmail.com", "qwe21");
console.log(Ajay);
