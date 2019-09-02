import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'red',
    color : 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>  {/*Fragment : 2개 이상의 태그는 무조건 하나로 닫혀야 하기 때문에 사용*/}
      <Hello />
      <div style={style}> 안녕히계세요 {name}</div>
      <div className="gray-box"> {name}</div>
    </>
  );
}

export default App;
