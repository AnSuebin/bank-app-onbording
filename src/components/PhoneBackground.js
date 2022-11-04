import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(50px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const Phone = styled.div`
  width: 312px;
  height: 296px;
  background: linear-gradient(180deg, #ecf0f5 0%, rgba(255, 255, 255, 0) 100%);

  border-radius: 36px 36px 0px 0px;
  margin: 32px auto;
  z-index: -1;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const PhoneBackground = () => {
  return <Phone />;
};

export default PhoneBackground;
