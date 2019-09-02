import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{
      color
    }}>
      {/*{isSpecial ? <b>*</b> : null }
        --> 삼항 연산자보다 falty할 때 아무값 출력 x 이므로 &&연산자가 더 효율적
      */}

      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello; //Hello라는 컴포넌트를 내보내주겠다
