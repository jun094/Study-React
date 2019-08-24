// Truthy: true 같은거... Falsy: false 같은거...

console.log(!undefined);
console.log(!null);
console.log(!"");
// 셋 다 true가 나옴 ! --> undefined과 null은 falsy한 값들..

function print(person) {
  //if (person === undefined || person === null) {
  if (!person) { // undefined과 null은 falsy하니깐 !(반전) 시켜주면 true가 나옴
    console.log('person이 없네요');
    return;
  }
  console.log(person.name);
}

const person = null;
print(person);


// truthy한 값들..
console.log(!3);
console.log(!'hello');
console.log(!['array?']);
console.log(![]);
console.log(!{}); // 빈 배열, 객체도 truthy함
