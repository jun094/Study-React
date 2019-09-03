import React, { useState } from 'react';

function InputSample() {
  //이번에는 useState 초기 값이 값이 아니라 객체로 !!
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
    // 현재 값 inputs 에 대한 key와 value들...
  });

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { name, value } = e.target;  // 비구조화 할당을 통해 값 추출

    //리액트에서는 객체의 value값을 변경할 떄는 조금 다름 !!!!!
    setInputs({ // 일단 먼저 복사를 해두어야함
      ...inputs, // spread연산자 : 기존에 있던 내용들 다  복사
      [name]:value // 현재 값으로 덮어씌움
                   // name에는 name이 될 수도, nickname이 될 수도 있음
    });
  };
  const onReset = () => {
    setInputs({
      name:'',
      nickname:''
    })
  };
  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}> 초기화 </button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
