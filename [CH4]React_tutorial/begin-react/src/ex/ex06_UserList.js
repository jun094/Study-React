import React from 'react';

function User({ user }) { //props사용
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];
  return (
    <div>
      {/*
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
      */}
      {
        users.map(
          user => (<User user = {user} key = {user.id} />)
          /* 맵 함수 사용할 떄는 key값 반드시 필요 !! */
        )
      }
    </div>
  );
}

export default UserList;
