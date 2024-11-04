function task(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}
task("First Task completd", 1000)
  .then(() => task("Second task is complted", 2000))
  .then(() => task("third task is completd", 3000))
  .then(() => task("Fouth task done", 4000));
