import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target; //비구조 할당

    // 객체 수정
    setInputs({
      ...inputs, // 불변성을 지키기 위해 일단 저장
      [name]: value // 덮어씌움 --> 객체 값 변경하는 방법 !
    });
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    //onCreate누르면 inputs값 빈칸으로 초기화
    setInputs({
      username: "",
      email: ""
    });

    // 배열 추가하는 방법 !!
    // 일단 새로운 user객체를 만듬
    const user = {
      id: nextId.current,
      username,
      email
    };

    //setUsers([...users, user]);  // 방법1. spread연산자 사용하는 방법
    setUsers(users.concat(user)); // 방법2. concat을 이용한 다른 방법
    // push를 사용하면 불변성을 지키기 못함 !!!

    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
