const flipACoin = new Promise((resolve, reject) => {
  resolve();
})
  .then(() => {
    doSomething();
  })
  .then(() => {
    doSomethingElse();
  })
  .then(() => {
    doAnotherThing();
  });
