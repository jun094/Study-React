true && true // true
true && false // false
true || false // true
false || true // true



const dog = {
  name: '멍멍이'
};

//animal에 값 있으면 이름 출력 , 없으면 undifined
function getName(animal) {
  /*
  if (animal) {
    return animal.name;
  }
  return undefined;
  */

  // 이걸 단축
  return animal && animal.name;
}

const name = getName();
console.log(name);


// 예시
// 앞에가 true, truthy 하면 뒤에꺼 출력
// 앞에가 false, falthy 하면 앞에꺼 출력
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1
