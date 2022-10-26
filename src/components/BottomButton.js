import styled from 'styled-components';

const Button = styled.button`
  width: 50vw;
  height: 56px;
  background-color: ${(props) => props.backgroundColor};
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomButton = () => {
  return (
    <ButtonContainer>
      <Button backgroundColor="#E9ECEF">＜ 뒤로가기</Button>
      <Button backgroundColor="#F8D459">넘어가기 ＞</Button>
    </ButtonContainer>
  );
};

export default BottomButton;
