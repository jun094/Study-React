import React from 'react';

/*
function Hello(props) {
  // 괄호가 2개 !!
  // 안쪽 괄호는 객체의 괄호
  // 바깥쪽 괄호는 자바스크립트 값을 사용하기 위한 괄호

  return <div style={{
    color : props.color
  }}>안녕하세요! {props.name}</div>;
}
*/


// 위에 것을 비구조 할당을 사용하여 가독성 있게 코딩 !
// 또한 객체 사용에서 key = value이면 생략 가능 !
function Hello({ color, name }) {
  return <div style={{
    color
  }}>안녕하세요 {name}</div>
}
Hello.defaultProps = {
  name: '이름없음'
}



export default Hello; //Hello라는 컴포넌트를 내보내주겠다
