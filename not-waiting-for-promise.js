console.log("I'm about to flip a coin!");

const flipACoin = new Promise((resolve, reject) => {
  console.log("I'm flipping the coin!");

  const flipResult = flip(); //let's say flip() takes a few seconds

  if (flipResult) {
    console.log("Here is the coin flip result!", flipResult);
    resolve();
  } else {
    reject();
  }
});

console.log("I have flipped the coin.");
