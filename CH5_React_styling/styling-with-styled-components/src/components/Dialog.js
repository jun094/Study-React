import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Button from "./Button";

//transition 지정 - keyframe 활용
const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;
const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;
const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

//뒷 배경 어둡게
const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  /* transition효과 */
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  /* 취소버튼 눌렀을때 fadeOut */
  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

//dialog 박스
const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  /* styled-components 에서의 Nested CSS */
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }

  /* transition효과 */
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  /* 취소버튼 눌렀을때 slideDown */
  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

// 기존 버튼에는 버튼간 간격이 1rem
// -> 그러나 확인 취소 버튼은 0.5rem으로 덮어씌우고 싶음

// styled.Button``; 이 아니라 styled 자체를 함수로 지정하여
// Button을 상속 받아서 Button style을 덮어 씌울수 있다.
const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

//confirmText 확인버튼, cancelText 취소버튼
function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onCancel,
  onConfirm
}) {
  // 취소 버튼 눌렀을때도 transition효과 적용해주기 위해..
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  useEffect(() => {
    // visible 값이 true -> false 가 되는 것을 감지
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500); //setTimeout함수 : 0.5초 뒤에 setAnimate을 false로 설정
      // 0.5초 동안 fade-out(위에서 아래로)을 보여줄꺼임
    }
    setLocalVisible(visible);
  }, [localVisible, visible]); // deps 지정

  // Dialog 안 보임
  if (!animate && !localVisible) return null;

  // Dialog 보임
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton onClick={onCancel} color="gray">
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton onClick={onConfirm} color="pink">
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  confirmText: "확인",
  cancelText: "취소"
};

export default Dialog;
