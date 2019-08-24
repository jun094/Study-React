// shift : 맨 앞 값 빼냄  ( 기존 배열 건들임 )
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
numbers.shift();
numbers.shift(); // 이렇게 하면 계속 계속 빠짐
console.log(value);
console.log(numbers);

// unshift : 맨 앞에 값 넣음 ( 기존 배열 건들임 )
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers);




// pop : 마지막 값 빼냄 ( 기존 배열 건들임 )
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
numbers.pop();
numbers.pop();
console.log(value);
console.log(numbers);

// push : 마지막에 값 넣음 ( 기존 배열 건들임 )
const numbers = [10, 20, 30, 40];
numbers.push(4);
console.log(numbers);




// concat : 여러개 배열을 하나의 배열로 합쳐줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);


// join :  배열 안의 값들을 (구분문자 포함 하여 )문자열 형태로 합쳐줍니다.
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
