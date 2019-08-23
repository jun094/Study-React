// 배열의 내장 함수

const arr = [1,2,3,4,5,6];

/*
const square = n => n*n; // arrow 함수
const newArr = arr.map(square);
*/

const newArr = arr.map(n => n*n);
console.log(newArr);




// 객체 배열에도 사용이 가능
const items = [
  {
    id : 1,
    text : 'hello'
  },
  {
    id : 2,
    text : 'bye'
  }
]

console.log(items.item[0]);
