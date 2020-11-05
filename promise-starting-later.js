const doThisLater = () => {
  return new Promise((resolve, reject) => {
    console.log("Done!");
    resolve();
  });
};

console.log("After promise-creating function");

doThisLater();
