// props  : . props 는 properties 의 줄임말입니다.
// 우리가 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props 를 사용합니다.

import React from 'react';
import Hello from './Hello';
//import Wrapper from './Wrapper';

function App() {
  return (
    <>
      <Hello name="react" color="red"/>
      <Hello color="blue"/> {/* defaultProps 사용 */}
    </>
  );
}

export default App;

