import React, { useRef } from "react";
import UserList from "./UserList";

function App() {
  // 배열을 추가할 때 users에 하나씩 추가 될려면?? 배열을 useState로 선언해주면 끝 !
  // ex08
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

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };
  return <UserList users={users} />;
}

export default App;

/* useRef로 변수id를 관리해주는 이유 !
   UserList컴포넌트가 추가될때마다 우리는 리렌더링 해주어야한다.
   그렇지만 id는 화면에 나오는 값이 아니니 굳이 컴포넌트 전체를 렌더링 해줄 필요 없다 !
   
   그냥 id값만 리렌더링 해주면 되므로 ! 컴포넌트 중에 변수 하나만 리렌더링 하고 싶을 때는
   useRef로 관리해주자 !
*/
