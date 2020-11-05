const promise1 = new Promise((resolve, reject) =>
  resolve("Resolved promise1!")
);
const promise2 = new Promise((resolve, reject) => reject("Rejected promise2!"));
const promise3 = new Promise((resolve, reject) =>
  resolve("Resolved promise3!")
);
const allPromises = [promise1, promise2, promise3];

Promise.all(allPromises)
  .then(results => {
    //se todas as promises da coleção forem resolvidas, 'results' é uma matriz de [promise1 result, promise2 result, promise3 result]
  })
  .catch(error => {
    // se alguma promise for rejeitada, 'error' terá o valor rejeitado da promise que falhou
    // se vários falharem, 'error' será o erro do primeiro que falhou
  });

Promise.allSettled(allPromises).then(results => {
  // aguarda até que todas as promises sejam resolvidas ou rejeitadas
  // 'results' será uma matriz de [promise1 result, promise2 result, promise3 result]
});

Promise.race(allPromises)
  .then(value => {
    // aguarda até que a primeira promise na matriz seja resolvida
    // 'value' será o valor resolvido da primeira promise resolvida
  })
  .catch(value => {
    // aguarda até que a primeira promise na matriz seja rejeitada
    // 'value' será o valor rejeitado da primeira promise rejeitada
  });

Promise.resolve(); // faz uma promise que resolve instantaneamente

Promise.reject(); // faz uma promise que rejeita instantaneamente
