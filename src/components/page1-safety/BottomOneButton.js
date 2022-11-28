// 훅
import { useNavigate } from 'react-router-dom';
// CSS
import styled, { keyframes } from 'styled-components';

//-- 애니메이션 --//
const opacity = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

//-- 스타일 --//
const Button = styled.button`
  width: 100vw;
  height: 56px;
  margin: 0;
  padding: 0;
  background-color: #f8d459;
  border: none;

  text-decoration: none;
  font-family: 'Bold';
  font-size: 16px;
  color: #222222;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;

  bottom: 0;
  margin: 0;
  padding: 0;

  animation-delay: ${(props) => props.delay || 0};
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${opacity};
  animation-fill-mode: backwards;
`;

const BottomOneButton = ({ nextLocation, delay }) => {
  const navigate = useNavigate();
  return (
    <ButtonContainer delay={delay}>
      <Button
        onClick={() => {
          navigate(nextLocation);
        }}
      >
        다음 ＞
      </Button>
    </ButtonContainer>
  );
};

export default BottomOneButton;
