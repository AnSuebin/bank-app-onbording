// CSS
import styled from 'styled-components';
// 로티 에니메이션
import Lottie from 'lottie-react';
import click from '../assets/lottie/click.json';

const ClickIcon = styled.div`
  position: absolute;
  width: 200px;
  left: 50%;
  top: ${(props) => props.top};
  transform: ${(props) => props.transform};
  z-index: 5;
`;

const Click = ({ onClick, top, transform }) => {
  return (
    <>
      <ClickIcon top={top} transform={transform}>
        <Lottie
          animationData={click}
          loop={true}
          style={{ width: 200 }}
          onClick={onClick}
        />
      </ClickIcon>
    </>
  );
};

export default Click;
