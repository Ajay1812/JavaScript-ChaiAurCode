const User = {
  _email: "CodeBom@hotmail.com",
  _password: "23qwer12",

  get email() {
    return this._email.toUpperCase();
  },
  set email(val) {
    this.email = val;
  },
};
const Rohit = Object.create(User);

console.log(Rohit.email); // uppercase
console.log(Rohit._email); // lowercas e
