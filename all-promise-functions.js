const flipACoin = new Promise((resolve, reject) => {
  resolve();
})
  .then(() => {
    //use `.then()` to do something after `resolve()` has been called
  })
  .catch(() => {
    //use `.catch()` to do something after `reject()` has been called
  })
  .finally(() => {
    //use `.finally()` to do something either way
  });
