const multiplier = function(n){
  return (x) => x * n;
};

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));
console.log(triple(5));

const operation = {
  add : (a, b) => a+b,
  multiply : (a,b) => a*b
};

console.log(operation.add(3,4))
console.log(operation.multiply(4,5))

// const operation = function(func, num) {
//   return func(num);
// };

// let double = (x) => x * 2;

// console.log(operation(double, 3));