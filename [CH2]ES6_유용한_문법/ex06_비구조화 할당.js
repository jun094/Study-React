// 1.
const object = {
  a: 1,
  b: 2
};
const { a, b } = object; // 비구조 할당

console.log(a); // 1
console.log(b); // 2

// 2.
function print({ a, b }) { // 파라미터도 비구조 할당이 가능
  console.log(a);
  console.log(b);
}
print(object);


// 3. 비구조화 할당시 기본값 설정
const object = {
  a: 1
};
const {a,b=2} = object; // 비구조 할당 + 파라미터 기본값 설정
console.log(a);
console.log(b); //기본값 2출력


// 4. 비구조화 할당시 이름 바꾸기
const animal = {
  name: '멍멍이',
  type: '개'
};

//const nickname = animal.name;
const { name : nickname } = animal; //비구조 할당

console.log(nickname); // 멍멍이



//5. 배열 비구조화 할당 : 객체 뿐만 아니라 배열도 가능 !
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);




// 6. 깊은 값 비구조화 할당
// 방법 1. 일일히 . 연산자 사용해서 꺼내기
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

// 방법 2.
const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;


const extracted = {
  name, // name : name --> key와 value값이 동일하므로 value값 생략 가능
  languages,
  value
};

console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}
