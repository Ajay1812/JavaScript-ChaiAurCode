//  fetch("https://api.github.com/users/ajay1812").then().catch().finally();

const promisOne = new Promise((resolve, reject) => {
  // Do an async task
  // Network call
  // cryptography
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promisOne.then(function () {
  console.log("Promis is consumed");
});

// Another way
// ===========================================

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async task 2 resolved");
});

// ===========================================

const promisThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "Ajay", email: "a.kumar01c@gmail.com" }); // pass - array, object
  }, 1000);
});

promisThree.then(function (user) {
  console.log(user);
});

// ===========================================

const promisFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    // let error = false;
    if (!error) {
      resolve({ username: "Ajay", pass: "1234" });
    } else {
      reject("Error: Somehting went wrong");
    }
  }, 1000);
});

promisFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log("Error: ", err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// ===========================================

// const promisFive = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = true;
//     // let error = false;
//     if (!error) {
//       resolve({ username: "CodeBomb", pass: "1234" });
//     } else {
//       reject("Error: CodeBomb went wrong");
//     }
//   }, 1000);
// });

// another way - async await
// async function consumedPromisFive() {
//   try {
//     const response = await promisFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumedPromisFive();

// https://jsonplaceholder.typicode.com/users -> get users data

// using async await

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();

// ===========================================

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
