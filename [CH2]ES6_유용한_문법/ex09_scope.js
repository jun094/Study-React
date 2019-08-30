// Scope 란, 우리가 변수 혹은 함수를 선언하게 될 때
// 해당 변수 또는 함수가 유효한 범위를 의미합니다. Scope 는 총 3가지 종류가있습니다.

/*
Global (전역) Scope: 코드의 모든 범위에서 사용이 가능합니다.
Function (함수) Scope: 함수 안에서만 사용이 가능합니다.
Block (블록) Scope: if, for, switch 등 특정 블록 내부에서만 사용이 가능합니다.
*/
const value = 'hello!'; // global scope

function myFunction() {
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction() {
  console.log('otherFunction: ');
  const value = 'bye!'; // function scoope
  console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);



////////////////////////////////

const value = 'hello!'; // global Scope

function myFunction() {
  const value = 'bye!'; // function Scope
  if (true) {
    const value = 'world'; // blaco Scope
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);
