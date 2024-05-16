const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("complete");
    resolve();
  }, 1000);
});
console.log(promise);

promise.then(() => {
  console.log("promise consume");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("async 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  console.log("promise 3");
  setTimeout(() => {
    console.log("async 3 ");
    resolve({ userName: "joy", email: "joy@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log("user", user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "hemi", password: "12345" });
    } else {
      reject("ERROR:something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is either resolved or rejected");
  });

//   Async Await

async function consumePromise() {
  let response = await promiseFour;
  console.log(response);
}
consumePromise();

// try-catch

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log("response", response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error", error);
//   }
// }
// getAllUsers();

// then

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
