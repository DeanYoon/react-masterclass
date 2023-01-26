import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotateAnimation = keyframes`
0%{
transform: rotate(0deg);
border-radius: 0px;

}50%{
transform: rotate(180deg);
border-radius: 100px;

}100%{
  transform: rotate(360deg);
border-radius: 0px;

}
`;
const Emoji = styled.span`
  font-size: 100px;
`;

const Box = styled.div`
  background-color: tomato;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateAnimation} 2s linear infinite;
  ${Emoji}:hover {
    font-size: 80px;
  }
`;
function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🥰</Emoji>
      </Box>
      <Emoji>😄</Emoji>
    </Wrapper>
  );
}

export default App;
