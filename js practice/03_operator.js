//연산자

//산술
let a = 7;
let b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log(a%b)
console.log(a**b)

console.log(a++) //7출력
console.log(a)
console.log(--b)

console.log(7/2);
console.log(7%2);
console.log(Math.floor(7/2));


//할당
let x = 10;
x += 5;
console.log(x);

x -= 8;
console.log(x);

x *= 2;
console.log(x);

x /= 2;
console.log(x);

x %= 3;
console.log(x);

//비교
console.log(5 == '5');
console.log(5 === '5');
console.log(7 != '7');
console.log(7 !=='7');

//논리
let isOnline = true;
let isActive = false;

console.log(isOnline && isActive)
console.log(isOnline || isActive)
console.log(!isActive)

//타입
console.log(typeof 'hello')