const operation = function(func, num) {
  return func(num);
};

let double = (x) => x * 2;

console.log(operation(double, 3));