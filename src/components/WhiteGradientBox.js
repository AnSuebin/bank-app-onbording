// 훅
import styled from 'styled-components';

const WhiteBox = styled.div`
  position: absolute;

  top: 190px;
  left: 50%;
  transform: translateX(-50%);

  width: 312px;
  height: 139px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 21.58%,
    rgba(255, 255, 255, 0.463542) 49.56%,
    #ffffff 85.92%
  );

  z-index: 2;
`;

const WhiteGradientBox = () => {
  return (
    <>
      <WhiteBox></WhiteBox>
    </>
  );
};
export default WhiteGradientBox;
