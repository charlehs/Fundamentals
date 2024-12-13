// a promise is like in real life we promise something and hope it returns if it does return we do something and if it doesnt we do something else
let p = new Promise((resolve, reject) => {
  // this shows what the promise does
  let a = 1 + 1;
  if (a == 2) {
    // if the promise is successful we resolve it
    resolve("Success");
  } else {
    // if failed we reject
    reject("Failed");
  }
});

// we use then which runs after a resolve, then takes a method, in this case with a single parameter
p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => console.log("This is in the catch " + message));
