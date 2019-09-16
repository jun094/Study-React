import React, {useEffect } from 'react';
// 이번에는 useEffect 라는 Hook 을 사용하여 컴포넌트가 마운트 됐을 때 (처음 나타났을 때),
// 언마운트 됐을 때 (사라질 때),그리고 업데이트 될 때 (특정 props가 바뀔 때)
// 특정 작업을 처리하는 방법


function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user // 비구조 할당

  /*
  // 1. 배열이 비어져 있는경우 -- [] 배열은 deps라고 부름
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남'); // 마운트 될 때 ( 등록버튼 누를 떄 )
    // 화면에 나타나고 다시 부를고 싶을 때 사용
    // ex) setTime, API 재호출, 라이브러리 사용할 때

    return () => {
      console.log('컴포넌트가 화면에서 사라짐'); // 언마운트 될 때 ( 삭제 버튼 눌를 때 )
      //ex) 라이브러리 인스턴스 제거
    };
  }, []);
  */

  /*
  // 2. 배열에 값이 있는 경우 ( ex) 배열에 user 가 았는경우 )
  useEffect(()=> {
    console.log("user값이 설정됨");
    console.log(user);
    return () => {
      console.log("user값이 바뀌기 전");
      console.log(user);
    }
  }, [user]);
  */


  // 3. 배열(deps)이 아예 없는 경우
  useEffect(()=> {
    console.log(user);
  })


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
