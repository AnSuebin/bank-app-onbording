// 훅
import styled from 'styled-components';
// 로티 에니메이션
import Lottie from 'lottie-react';
import click from '../assets/lottie/click.json';

const ClickIcon = styled.div`
  position: absolute;
  height: 10px;
  left: 50%;
  top: 235px;
  z-index: 3;
  transform: translateX(50px);
`;

const Click = ({ loop, onClick }) => {
  return (
    <>
      <ClickIcon>
        <Lottie
          animationData={click}
          loop={loop}
          style={{ width: 34.88 }}
          onClick={onClick}
        />
      </ClickIcon>
    </>
  );
};

export default Click;
