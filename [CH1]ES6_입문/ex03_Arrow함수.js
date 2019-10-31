// 1.
const add = (a, b) => {
  return a + b;
};
const sum = add(1, 2);
console.log(sum);

//2. 파라미터 1개일때는 ()생략 가능
const hello = name => {
  console.log(`hello, ${name}`);
};
hello("최준영");

//3. 1번을 더 간략화
const add2 = (a, b) => a + b;
const sum2 = add2(1, 2);
console.log(sum2);
