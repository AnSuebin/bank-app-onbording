// CSS
import styled, { keyframes } from "styled-components";

//-- 애니메이션 --//
const opacity = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

//-- 스타일 --//
const WhiteBigPhone = styled.div`
  display: flex;
  justify-content: center;

  top: 32px;
  width: 300px;
  height: 296px;
  background: #ffffff;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 0px 40px rgba(51, 53, 56, 0.09);
  border-radius: 36px 36px 0px 0px;

  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${opacity};
  animation-fill-mode: backwards;
`;

const BigPhoneImg = styled.img`
  margin-top: 16px;
  width: 264px;
  height: 246px;
  border-radius: 36px 36px 0px 0px;
`;

const CheckecdBackward = () => {
  return (
    <>
      <WhiteBigPhone>
        <BigPhoneImg
          src={process.env.PUBLIC_URL + "/img/intuition/big-img.png"}
          alt="큰글씨 모드"
        ></BigPhoneImg>
      </WhiteBigPhone>
    </>
  );
};

export default CheckecdBackward;
