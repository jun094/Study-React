// 객체에서 특정 값을 추출하는 것

const ironMan = {
  name: "토니 스타크",
  actor: "로버트 다우니 주니어",
  alias: "아이언맨"
};
const { name } = ironMan; // 비구조화 할당 : ironMan에서 name을 추출
console.log(`${name}`); // ironMan.name 안해도 됨 !!

const captainAmerica = {
  name: "스티븐 로저스",
  actor: "크리스 에반스",
  alias: "캡틴 아메리카"
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}

// print함수를 더 간략하게 쓸 수 있다.
function print2(hero) {
  const { alias, name, actor } = hero; // hero에서 특정값(alias, name,actor)을 추출
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
function print3({ alias, name, actor }) {
  // 파라미터도 비구조 할당이 가능
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print3(ironMan);
print3(captainAmerica);
