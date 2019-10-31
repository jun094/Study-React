// 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById, querySelector 같은
// DOM Selector 함수를 사용해서 DOM 을 선택합니다
// useRef : 액트에서 ref 라는 것을 사용합니다.
//          함수형 컴포넌트에서 ref 를 사용 할 때에는 useRef 라는 Hook 함수를 사용합니다.

import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });
  const nameInput = useRef(); // useRef 호출, nameInput이라는 객체를 만듦
  // 접근하고 싶은 DOM에 nameInput객체 넣어주면 끝

  const { name, nickname } = inputs;

  const onChange = e => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
    nameInput.current.focus(); //nameInput으로 focus이동하는 api
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput} /*여기로 이동*/
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
