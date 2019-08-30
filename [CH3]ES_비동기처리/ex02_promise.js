// 비동기 작업을 처리 할 때에는 콜백 함수로 처리를 해야 했었는데요,
// 콜백 함수로 처리를 하게 된다면 비동기 작업이 많아질 경우
// 코드가 쉽게 난잡해지게 되었습니다.
// --> ES6에서는 promise 사용 !!

// 과거 callback의 경우
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          console.log('끝!');
        });
      });
    });
  });
});


// promise 경우 - promise 키워드사용
// 파라미터 2개 : 성공시 resolve , 실패시 reject
const myPromise = new Promise((resolve, reject) => {
  // 구현..
})

// 1. resolve 함수 사용
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(result);
  }, 1000);
})
// then 함수 :  myPromise 가 끝나고 난 뒤에 작업 수행
myPromise.then(result => {
  console.log(result);
});


// 2. reject 함수 사용
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 1000);
})
// catch 함수 : 에러 발생시 작업 수행
myPromise.then(result => {
  console.log(result);
}).catch(e =>{
  console.log(e)
});


// 예제 - 위에 callback함수 만든거
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) { // 값이 5이면 error
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch(e => {
    console.error(e);
  });
