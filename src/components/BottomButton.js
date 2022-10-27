import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
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
