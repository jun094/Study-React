import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

/*
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color };
  border-radius: 50%;
  ${props => props.huge && css`width : 10rem; height: 10rem;`}
`;
// props.huge && ...  : huge값이 들어왔다면 
*/

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#495057",
  pink: "#f06595"
};

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  };
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  };
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  };

  return (
    <ThemeProvider theme={{ palette }}>
      {/* ThemProvider 안에는 하나의 element만 있어야 하므로 
          flagment로 하나로 묶어줌*/}
      <>
        <AppBlock>
          {/* 색, 크기 지정 */}
          <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button>BUTTON</Button>
            <Button size="small">BUTTON</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="gray" size="large">
              BUTTON
            </Button>
            <Button color="gray">BUTTON</Button>
            <Button color="gray" size="small">
              BUTTON
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="pink" size="large">
              BUTTON
            </Button>
            <Button color="pink">BUTTON</Button>
            <Button color="pink" size="small">
              BUTTON
            </Button>
          </ButtonGroup>

          {/* ouline 지정 */}
          <ButtonGroup>
            <Button size="large" outline>
              BUTTON
            </Button>
            <Button color="gray" outline>
              BUTTON
            </Button>
            <Button color="pink" size="small" outline>
              BUTTON
            </Button>
          </ButtonGroup>

          {/* fullwidth 지정, onClick Dialog 지정 */}
          <ButtonGroup>
            <Button size="large" fullWidth onClick={onClick}>
              BUTTON
            </Button>
            <Button size="large" color="gray" fullWidth onClick={onClick}>
              BUTTON
            </Button>
            <Button size="large" color="pink" fullWidth onClick={onClick}>
              BUTTON
            </Button>
          </ButtonGroup>
        </AppBlock>

        <Dialog
          title="데이터 삭제"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
