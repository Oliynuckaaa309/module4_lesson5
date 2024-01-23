function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  let add5 = makeAdder(4);
let add10 = makeAdder(1);

console.log(add5(0)); 
console.log(add10(2));

