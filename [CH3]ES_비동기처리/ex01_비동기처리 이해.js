function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000; i++) {

  }
  const end = Date.now();
  console.log(end - start + 'ms'); // 작업시간 얼마나 걸렸는지 출력
}

console.log('작업 시작!');
work();
console.log('다음 작업');
// 동기 처림 됨
// 끝나는 순서 : 작업시작 -> work -> 다음작업


// 1. setTimeout함수
function work() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 100000000; i++) {

    }
    const end = Date.now();
    console.log(end - start + 'ms'); // 작업시간 얼마나 걸렸는지 출력
  }, 0);
}

console.log('작업 시작!');
work(); // work함수는 0초후에 실행됨 == 바로 실행됨 ! --> 비동기 처리
console.log('다음 작업'); // work 루프가 돌아가는 동안 실행됨
// work : 96초 걸림

// 2. callback함수 - work함수 끝나고 다음작업 실행
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 100000000; i++) {

    }
    const end = Date.now();
    console.log(end - start + 'ms');
    callback();
  }, 0);
}

console.log('작업 시작!');
work(() => {
  console.log('작업이 끝났어요!')
});
console.log('다음 작업');
// work : 104초 걸림 -->
