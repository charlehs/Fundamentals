// a promise is like in real life we promise something and hope it returns if it does return we do something and if it doesnt we do something else
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    // if the promise is successful we
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => console.log("This is in the catch " + message));
