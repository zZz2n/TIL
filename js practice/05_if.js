// let x = 5;

// if (x>=5){
//   console.log(`${x}는 5이상이다`)
// } else {
//   console.log(`${x}는 5이하다`)
// }

let x = 7;
let result = ''

if (x%2 === 0){
  result = '짝수';
} else {
  result = '홀수';
}
console.log(result)

result = x % 2 === 0 ? '짝수' : '홀수';
console.log(result);