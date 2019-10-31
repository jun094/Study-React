//조건부 렌더링이란, 특정 조건에 따라 다른 결과물을 렌더링 하는 것을 의미합니다.
//예를 들어서, App 컴포넌트에서 Hello 컴포넌트를 사용 할 때, isSpecial 이라는 props 를 설정해볼게요.

import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App() {
  return (
    //컴포넌트 태그 사이에 다른 컴포넌트를 렌더링할 때 children props 사용 !!
    <Wrapper>
      {/*<Hello name="react" color="red" isSpecial={true}/>*/}
      <Hello name="react" color="red" isSpecial />
      {/*isSpecial에 값을 아무것도 안넣으면 자동으로 true로 인식 ! */}
      <Hello color="blue" />
    </Wrapper>
  );
}

export default App;
