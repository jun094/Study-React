import React, {useState} from 'react';
//useState 사용하기 위해 부름

function Counter() {
  const [number, setNumber] = useState(5);
  {/* 이 함수를 호출해주면 배열이 반환되는데요,
    여기서 첫번째 원소는 현재 상태,
    두번째 원소는 현재 상태를 바꿔주는 함수입니다.*/}

  const onIncrease = () => {
    setNumber(number + 1);
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button> {/*자바스크립트와 달리 리액트는 onClick할때 대문자 !!!*/}
      <button onClick={onDecrease}>-1</button> {/*HTML과 달리 리액트는 onDecrease() 괄호를 쓰지 않음를
                                                  렌더링될때 부르는게 아니므로 !! */}
    </div>
  );
}

export default Counter;
