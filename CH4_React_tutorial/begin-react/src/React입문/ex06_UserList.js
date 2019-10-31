import React from "react";

function User({ user }) {
  //props사용
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
      username: "velopert",
      email: "public.velopert@gmail.com"
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com"
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com"
    }
  ];
  return (
    <div>
      {/* 배열이 고정적이라면 이렇게 해도 됨.
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
      */}

      {users.map(
        user => (
          <User user={user} key={user.id} />
        )
        /* 맵 함수 '렌더링' 떄는 key값 반드시 필요 !!
           배열안에 id값이 없다면?? 
           (user, index) => (<User user={user} key = {index} /> )
           --> map 함수 내장 파라미터인 index값 사용 ! 근데,, 왠만하면 피하자
        */
      )}
    </div>
  );
}

export default UserList;
