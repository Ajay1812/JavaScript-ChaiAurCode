function SetUsername(username) {
  this.username = username;
  console.log("call this function: ", username);
}

function createUser(username, email, password) {
  SetUsername.call(this, username); // this call function will pass the current execution context to other function
  this.email = email;
  this.password = password;
}

const Ajay = new createUser("Ajay", "nf@gmail.com", "2341");

console.log(Ajay);
