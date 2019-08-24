// reduce :

const numbers = [1, 2, 3, 4, 5];

/*
let sum = 0;
numbers.forEach(n => {
  sum += n;
});
*/

// 저거를 reduce를 이용하면 한줄에 가능 !
// 파라미터 2개
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

// 배열의 평균
// 파라미터 4개
let avg = numbers.reduce((accumulator, current, index, array) => {
  if(index === array.length-1){
    return ( accumulator + current ) / array.length;
  }
  return accumulator + current;
}, 0);
console.log(avg);
