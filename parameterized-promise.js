const timeout = (millisecondsToWait, onTimeoutComplete) => {
  return new Promise(resolve => {
    setTimeout(() => {
      onTimeoutComplete();
      resolve();
    }, millisecondsToWait);
  });
};

timeout(3000, () => {
  console.log("Timeout finished!");
}).then(() => {
  console.log("Promise resolved!");
});
