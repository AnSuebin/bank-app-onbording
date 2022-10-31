import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const opacity = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const Button = styled.button`
  width: 50vw;
  height: 56px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  color: #222222;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 0;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${opacity};
  animation-fill-mode: forwards;
`;

const BottomButton = ({ backLocation, nextLocation }) => {
  const navigate = useNavigate();
  return (
    <ButtonContainer>
      <Button
        backgroundColor="#E9ECEF"
        onClick={() => {
          navigate(backLocation);
        }}
      >
        ＜ 뒤로가기
      </Button>
      <Button
        backgroundColor="#F8D459"
        onClick={() => {
          navigate(nextLocation);
        }}
      >
        넘어가기 ＞
      </Button>
    </ButtonContainer>
  );
};

export default BottomButton;
