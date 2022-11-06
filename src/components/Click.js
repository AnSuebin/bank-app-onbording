// 훅
import styled from 'styled-components';
// 로티 에니메이션
import Lottie from 'lottie-react';
import click from '../assets/lottie/click.json';

const ClickIcon = styled.div`
  position: absolute;
  height: 10px;
  left: 50%;
  top: ${(props) => props.top};
  z-index: 3;
  transform: ${(props) => props.transform};
`;

const Click = ({ onClick, top, transform }) => {
  return (
    <>
      <ClickIcon top={top} transform={transform}>
        <Lottie
          animationData={click}
          loop={true}
          style={{ width: 34.88 }}
          onClick={onClick}
        />
      </ClickIcon>
    </>
  );
};

export default Click;
