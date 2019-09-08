import React, {useEffect } from 'react';
// 이번에는 useEffect 라는 Hook 을 사용하여 컴포넌트가 마운트 됐을 때 (처음 나타났을 때),
// 언마운트 됐을 때 (사라질 때),그리고 업데이트 될 때 (특정 props가 바뀔 때)
// 특정 작업을 처리하는 방법


function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user // 비구조 할당

  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남'); // 마운트 될 때 ( 등록버튼 누를 떄 )
    // 화면에 나타나고 다시 부를고 싶을 때 사용
    // ex) setTime, API 재호출

    return () => {
      console.log('컴포넌트가 화면에서 사라짐'); // 언마운트 될 때 ( 삭제 버튼 눌를 때 )
    };
  }, []);


  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: active ? 'green' : 'black'
        }}
        onClick={() => onToggle(id)}
      >
        {username}
      </b>
      &nbsp;
      <span>({email})</span>

      <button onClick={() => onRemove(id)} >삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;
