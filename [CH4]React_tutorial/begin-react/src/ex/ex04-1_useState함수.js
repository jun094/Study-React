// useState : hooks 기능 중 하나 !!

//리액트 16.8 이전 버전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었는데요,
//리액트 16.8 에서 Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었습니다.
//이번에는 useState 라는 함수를 사용해보게 되는데, 이게 바로 리액트의 Hooks 중 하나입니다.


import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <Counter />
  );
}

export default App;
