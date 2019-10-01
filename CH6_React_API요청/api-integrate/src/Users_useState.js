import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  // 3가지 상태 관리
  const [users, setUsers] = useState(null); //결과물
  const [loading, setLoading] = useState(false); //api가 요청중인지 아닌지
  const [error, setError] = useState(null); //error가 발생됐는지 아닌지

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;

  //이 시점은 user에 제대로 된 결과물이 들어온 경우
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>

      <button onClick={fetchUsers}> 다시 불러오기 </button>
    </>
  );
}

export default Users;
