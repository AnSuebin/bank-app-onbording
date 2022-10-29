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
  width: 294px;
  height: 290px;
  background: linear-gradient(180deg, #e9ecef 0%, rgba(233, 236, 239, 0) 100%);
  border-radius: 36.75px 36.75px 0px 0px;
  margin: 36px auto;
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
