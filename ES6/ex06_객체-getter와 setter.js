// 1. getter
const numbers={
  a:1,
  b:2,
  get sum(){
    console.log('sum함수가 실행됩니다.!');
    return this.a + this.b;
  }
}

console.log(numbers.sum);
//console.log(numbers.sum()); // 함수인데 ()를 안붙히고 조회만함
// getter함수는 ()처럼 호출 개념이 아니라 조회하려고 할 때 사용 !!



// 2. setter
const dog = {
  myName : '멍멍이',
  set name(val) {
    console.log('이름이 바뀝니다.!');
    this.myName = val;
  }
}
console.log(dog.myName);

//setter함수로 이름 변경
dog.name = '뭉뭉이';
console.log(dog.myName);






// 3. getter 와 setter 예시
const numbers = {
  _a : 1,
  _b : 2,
  sum : 3,
  cal(){
    console.log('cal...');
    this.sum = this._a + this._b;
  },

  get a(){
    console.log('get함수 실행..');
    return this._a;
  },
  get b(){
    console.log('get함수 실행..');
    return this._b;
  },
  set a(val){
    console.log('set함수 실행..');
    this._a = val;
    this.cal();
  },
  set b(val){
    console.log('set함수 실행..');
    this._b = val;
    this.cal();
  }
};

console.log(numbers.sum);
console.log(numbers.a);

numbers.a = 5; // setter함수 실행
console.log(numbers.a);




// getter 와 setter 의 사용 이유
