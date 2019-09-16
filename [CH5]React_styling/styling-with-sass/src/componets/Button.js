import React from 'react';
import classNames from 'classnames';
import './Button.scss';


//버튼을 3가지 버전으로 만들꺼임
// size : large, medium, small
// color : blue, pink, gray
function Button({ children, size, color, outline, fullWidth }) {
  return <button className={classNames('btn', size, color, {
    outline,
    fullWidth
  })}>{children}</button>;
                        //클래스name을 size와 함께 만듬 
                        // classNames라이브러리를 사용하여 size를 props로 받아 btn클래스를 문자열로 만들어 조건부 사용
                        // ex) btn medium, btn small --> 문자열!
                        
                        //outline,fullWidth은 객체로 받아옴 --> true/false 값이 이므로
                        //defaultProps 설정 안해줘도 괜찮음 --> 값이 없으면 undefined이므로
}

//default 설정
Button.defaultProps = {
    size: 'medium',
    color : 'blue'
};


export default Button;