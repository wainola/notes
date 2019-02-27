const p1 = async d => {
  setTimeout(() => {
    console.log("2000 ms");
  }, 2000);
  return d;
};
const p2 = async d2 => {
  setTimeout(() => console.log("4000 ms"), 4000);
  return d2;
};

// const resolver = async (prom1, prom2) => Promise.race([prom1, prom2])

// resolver(p1('poto'), p2('caca')).then(d => console.log('d:', d))

const waiter = async () => setTimeout(() => console.log("waiting"), 1000);

const racer = (promise, waiter) => Promise.race([promise, waiter]);

racer(p2("poto"), waiter()).then(d => console.log(d));

const f = ms =>
  new Promise(reject => {
    let id = setTimeout(() => {
      clearTimeout(id);
      reject("Time!", ms);
    }, ms);
  });

const racer2 = (promise, ms) => {
  let timeo = new Promise(reject => {
    setTimeout(() => {
      reject("Time out", ms);
    }, ms);
  });

  return Promise.race([promise, timeo]);
};

racer2(p2("Nicolas"), 10)
  .then(d => console.log("d is", d))
  .catch(e => console.log("e:", e));

const mk = (timeout = 3000) =>
  new Promise((resolve, reject) => {
    setTimeout(reject("MK!!!"), timeout);
  });

const p3 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve("P3!!!!"), 1000);
  });

Promise.race([mk(), p3()])
  .then(d => console.log("then racer", d))
  .catch(e => console.log("catch racer", e));

const f1 = new Promise(resolve => {
  setTimeout(resolve, 2000, "Resolved in 2000 ms");
});

const f2 = new Promise((resolve, reject) =>
  setTimeout(reject, 1000, "Rejected in 1000ms")
);

Promise.race([f1, f2])
  .then(d => console.log("racing??", d))
  .catch(e => console.log("rejected racing?", e));

const f3 = () => new Promise(resolve => setTimeout(resolve, 1000, "peo"));
const f4 = () => new Promise(resolve => setTimeout(resolve, 500, "pichi"));

Promise.race([f3(), f4()]).then(d => console.log("resolved:", d));
