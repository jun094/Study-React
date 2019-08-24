// for-of : 배열을 만들때 주로 사용
const numArr = [10,20,30,40,50];

for(let number of numArr){
  console.log(number);
}


// for-in : 객체에 주로 사용
const doggy = {
  name : '멍멍이',
  sound : '멍멍',
  age:2
}
console.log(Object.keys(doggy)); //Object.keys : 객체의 key값들만 가져옴
console.log(Object.values(doggy)); //Object.values : 객체의 val값들만 가져옴
console.log(Object.entries(doggy)); // Object를 배열 형태로 가져옴

for(let i in doggy){
  console.log(`${i}`); //이렇게하면 key값들만 차례로 출력
}
for(let key in doggy){
  console.log(`${key} : ${doggy[key]}`);
}
