// Hoisting 이란, 자바스크립트에서 아직 선언되지 않은 함수/변수를 "
// 끌어올려서" 사용 할 수 있는 자바스크립트의 작동 방식을 의미합니다.

myFunction();

function myFunction() {
  console.log('hello world!');
}

// 위 코드에서는 myFunction 함수를 선언하기 전에, myFunction() 을 호출해주었습니다.
// 함수가 아직 선언되지 않았음에도 불구하고 코드는 정상적으로 작동하게 됩니다.
// 자바스크립트 엔진이 가능하게 해줌 -> 끌어올려서 사용이 가능함 (hoisting)


// 개발하면서 피해야하는 상황 !
