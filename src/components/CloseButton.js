import styled from 'styled-components';

const Close = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  padding: 10px;
`;

const CloseButton = () => {
  return <Close>X</Close>;
};

export default CloseButton;
