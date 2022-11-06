// 훅
import styled, { keyframes } from 'styled-components';
// 로티 에니메이션 및 이미지
import Lottie from 'lottie-react';
import complete from '../../../assets/lottie/complete.json';

const opacity = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const SuccessContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 104px;
  left: 50%;
  transform: translateX(-50%);

  z-index: 1;
  div:nth-child(2) {
    margin-top: 8px;
    width: 120px;

    font-family: 'Medium';
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #222222;

    animation-duration: 0.75s;
    animation-timing-function: ease-in-out;
    animation-name: ${opacity};
    animation-fill-mode: forwards;
  }
`;

const Success = ({ successText }) => {
  return (
    <>
      <SuccessContainer>
        <Lottie animationData={complete} loop={false} style={{ height: 84 }} />
        <div>{successText}</div>
      </SuccessContainer>
    </>
  );
};

export default Success;
