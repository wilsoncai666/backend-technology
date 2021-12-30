function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
async function task() {
    while (true) {
      await sleep(2);
      console.log(process.memoryUsage());
    }
  }
  task();