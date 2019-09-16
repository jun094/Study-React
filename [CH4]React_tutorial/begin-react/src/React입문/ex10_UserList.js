import React from 'react';

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user // 비구조 할당
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
