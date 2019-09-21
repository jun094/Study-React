import React from 'react';

function Info({name, color, isSpecial}) {
  return (
    <div>안녕하세요 {name} &nbsp;
        <span style={{ color }}>
            {/*안쪽 괄호는 객체의 괄호*/}  
            정보를 입력하세요          
        </span>
    </div>
  );
}

Info.defaultProps = {
    name : '홍길동'
}

export default Info;