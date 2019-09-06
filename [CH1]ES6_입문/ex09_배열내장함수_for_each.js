// 벼열의 내장 함수
// 반복문인데 함수임
// 배열 안에 있는 것을 꺼내서 '행동'을 수행하고 싶을 때

const superheroes = ['아이어맨','캡틴','토르','닥터스트레인지'];

superheroes.forEach(function(hero){
  console.log(hero);
})
superheroes.forEach((hero) => {
  console.log(hero);
})


$('.state').forEach(function(i){
  console.log($('this').val() + "  ");
})
