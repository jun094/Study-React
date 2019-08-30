const myFunction(a) { // 여기서 a 는 파라미터
  console.log(a); // 여기서 a 는 인자
}

myFunction('hello world'); // 여기서 'hello world' 는 인자


// 함수인자에서 rest
function substract(x,y){
  return x-y;
}
const numbers = [1,2];
const result = subtract(...numbers); // 함수인자에서 rest사용
console.log(result);



// 가장 큰 값 출력
function max(x,...rest) {
  let i=0;
  return x>y ? x:rest[i]

}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);
