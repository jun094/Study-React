// rest는 생김새는 spread 랑 비슷한데, 역할이 매우 다릅니다.
// rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능합니다.

// 1. 객체에서 사용
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime; // 비구조 할당

console.log(color); // 당연히 purple
console.log(rest); // 나머지 다 비구조 할당


// 주로 사용 할때는 위와 같이 rest 라는 키워드를 사용하게 되는데요,
// 추출한 값의 이름이 꼭 rest 일 필요는 없습니다.
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(attribute);
console.log(slime);

// 2. 배열에서 사용
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;
//const [..rest, last] = numbers; // 앞에다가는 사용 불가능 !!

console.log(one);
console.log(rest);


// spread 는 배열이나 객체의 값들을 다른 곳에 퍼트려줌
// rest 는 배열이나 객체에 있던 값들을 모아줌
