const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip(); //let's say flip() takes a few seconds

  if (flipResult) {
    resolve(flipResult);
  } else {
    reject();
  }
}).then(flipResult => {
  console.log(`The result was ${flipResult}`);
});
