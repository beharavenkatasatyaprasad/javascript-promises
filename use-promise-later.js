const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip(); //let's say flip() takes a few seconds

  if (flipResult) {
    resolve(flipResult);
  } else {
    reject();
  }
});

//...
//do other things
//...

console.log("Wait did I flip the coin?");

flipACoin.then(flipResult => {
  console.log("Oh I did!");
});

console.log("Double checking...");

flipACoin.then(flipResult => {
  console.log("Okay I definitely did!");
});
