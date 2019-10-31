//컴포넌트 태그 사이에 다른 컴포넌트를 렌더링할 때 children props 사용 !!
import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px"
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
