import styled from 'styled-components';

const Close = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  padding: 10px;
  text-decoration: none;
  color: #222222;
  cursor: pointer;
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const CloseButton = () => {
  return (
    <CloseContainer>
      <Close>╳</Close>
    </CloseContainer>
  );
};

export default CloseButton;
