// 배열에 새로운 항목 추가하기

import React from 'react';

// oncreate : 배열 추가 함수
function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
      {/*onCreate함수는 props에서 받아오는 것 임
         여기서 직접 만들지 않음 */}
    </div>
  );
}

export default CreateUser;
