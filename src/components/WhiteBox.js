// CSS
import styled from 'styled-components';

const WhiteBlockBox = styled.div`
  position: absolute;

  top: 325.9px;
  left: 50%;
  transform: translateX(-50%);

  width: 312px;
  height: 139px;
  background: #ffffff;

  z-index: 4;
`;

const WhiteBox = () => {
  return (
    <>
      <WhiteBlockBox></WhiteBlockBox>
    </>
  );
};

export default WhiteBox;
