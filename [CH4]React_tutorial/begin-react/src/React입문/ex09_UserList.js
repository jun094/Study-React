import React from 'react';

function User({ user, onRemove }) {
  const { username, email, id } = user // 비구조 할당
  return (
    <div>
      <b>{username}</b> <span>({email})</span>
      <button onClick={() => onRemove(id)} >삭제</button>
                       {/* onRemove함수를 실행시키돼, 파라미터를 보내면서 호출할 것이다.
                           onClick = {onRemove(id)} 이건 안됨 !
                           저렇게 함수를 호출하게 되면 렌더링 되는 순간 remove함수 실행되서 다 삭제 됨
                           그러므로, 함수를 호출하는 것이 아니라, 함수를 넣어주는 개념 */}
    </div>
  );
}

function UserList({ users, onRemove }) {
  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
