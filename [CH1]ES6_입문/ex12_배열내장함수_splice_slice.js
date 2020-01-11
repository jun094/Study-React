/** @format */

// splice : 특정 index 부터 x개를 잘라서 가져감 !!!  ( 기존 배열 건들임  )
const numbers = [10, 20, 30, 40];

const index = numbers.indexOf(20); // 20의 index값을 가져옴
const spliced = numbers.splice(index, 3); // index부터 3개 잘라냄

console.log(spliced); // 잘라서 가져감
console.log(numbers); // 잘려져 있음

// slice(a,b) : a부터 b전 까지 잘라서 출력만 !!! ( 기존 배열 건들기 x )
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지
console.log(sliced); // 잘라내서 출력만
console.log(numbers); // 여기는 그대로
