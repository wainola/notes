const p1 = async () => "Poto";
const p2 = async () => "Peo";

const arrPro = [p1, p2];

const s = arrPro.reduce((acc, item) => {
  return item().then(d => acc.then(arr => [...arr, d]));
}, Promise.resolve([]));

s.then(d => console.log(d));
