const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip(); //let's say flip() takes a few seconds

  if (flipResult) {
    resolve();
  } else {
    reject();
  }
});
