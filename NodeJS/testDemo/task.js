/* const co = require('co');
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
function* task() {
  yield sleep(2);
  console.log(process.memoryUsage());
  yield task();
}
co(function* () {
  yield task();
}); */



function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  async function task() {
    await sleep(2);
    console.log(process.memoryUsage());
    await task();
  }
  task();