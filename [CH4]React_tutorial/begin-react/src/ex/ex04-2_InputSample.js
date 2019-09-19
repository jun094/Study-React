import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState(''); {/* 초기값은 공백 */}

  {/*e : 이벤트 객체 */}
  const onChange = (e) => {
    setText(e.target.value);
    {/*e.target : 이벤트 객체가 일어남 DOM */}
    {/*e.target.value : 이벤트 객체가 일어남 DOM의 값들  */}
  };
  const onReset = () => {
    setText('');
  }
  return (
    <div>
      <input onChange={onChange} value = {text} />
      <button onClick = {onReset}> 초기화 </button>
      <div>
        <b>값: </b> {text}
      </div>
    </div>
  );
}

export default InputSample;
