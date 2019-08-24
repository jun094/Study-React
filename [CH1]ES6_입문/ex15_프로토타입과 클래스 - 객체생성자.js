function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() { // 익명 함수
    console.log(this.sound);
  };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

// 여기서 문제는 type, name, sound는 다른 값을 받는것에 비해 say는 똑같음 !
// this.say는 dog와 cat에서 똑같이 사용되는 것임 -> 2번 사용 ( 불필요한 사용 )



function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  // this.say는 밖으로 빼냄 !
}

// 프로토타입 : 객체 생성자를 만들 때 객체가 공유할 값들을 생성
// 프로토타입 생성 ( .prototype.[원하는키] )
Animal.prototype.say = function() {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1; // dog와 cat 둘다에 1이 들어가 있는 것임

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
