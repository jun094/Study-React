/*
function isAnimal(text) {
  const animals = ['고양이','개','거북이','너구리'];
  return animals.includes(text);
  // includes : 배열 내장함수 --> 배열(animals)안에 text가 포함되어 있으면 true, 없으면 false
}
*/

// 위에 것을 arrow 함수로
const isAnimal = text =>  ['고양이','개','거북이','너구리'].includes(text);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false








/*
function getSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === '고양이') return '야옹~';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구 구 구';
  return '...?';
}
*/

// 이걸 더 깔끔하게 코딩 -> 객체사용
function getSound(animal) {
  const sounds = {
    개: '멍멍!',
    고양이: '야옹~',
    참새: '짹짹',
    비둘기: '구구 구 구'
  };
  return sounds[animal] || '...?';
}
console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구




//반면, 값에 따라 실행해야 하는 코드 구문이 다를 때는 어떻게 해야 할까요?
//그럴 떄는 객체에 함수를 넣으면 됩니다.
function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('고양이');
    },
    비둘기() {
      console.log('구구 구 구');
    }
  };
  if (!tasks[animal]) {
    console.log('...?');
    return;
  }
  tasks[animal]();
}

getSound('개');
getSound('비둘기');
