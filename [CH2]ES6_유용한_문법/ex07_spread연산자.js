// spread :   spread 라는 단어가 가지고 있는 의미는 펼치다, 퍼뜨리다 입니다.
//            이 문법을 사용하면, 객체 혹은 배열을 펼칠수있습니다.
//            --> 기존 객체, 배열을 복사하여 그대로 사용

// 1. 객체에 사용
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime, //slime 객체를 펼칠 수 있음.
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);


// 2. 배열에 사용
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);

// 여러번 사용도 가능
const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
