// CSS
import styled, { keyframes } from "styled-components";
// 컴포넌트
import WhiteBox from "../WhiteBox";
import WhiteGradientBox from "../WhiteGradientBox";
import WhitePhoneBackground from "../WhitePhoneBackground";

//-- 애니메이션 --//
const opacity = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const ScrollUp = keyframes`
from {
  transform: translateY(0);
}
to {

  transform: translateY(-284px);
}
`;

//-- 스타일 --//
const RecomendInfo = styled.div`
  box-sizing: border-box;

  position: absolute;
  display: flex;
  justify-content: center;

  top: 32px;
  left: 50%;
  transform: translateX(-50%);

  width: 312px;
  height: 296px;
  z-index: 3;
  div {
    margin-top: 20px;
    overflow: hidden;
    img {
      width: 280px;
      animation-delay: 1.5s;
      animation-duration: 1.8s;
      animation-timing-function: ease-in;
      animation-name: ${ScrollUp};
      animation-fill-mode: forwards;
    }
  }

  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${opacity};
  animation-fill-mode: backwards;
`;

const PageTurnOverBackword = () => {
  return (
    <>
      <RecomendInfo>
        <div>
          <img
            src={
              process.env.PUBLIC_URL + "/img/accessibility/recommendation.png"
            }
            alt="연금 추천 상품"
          />
        </div>
      </RecomendInfo>
      <WhitePhoneBackground />
      <WhiteGradientBox />
      <WhiteBox />
    </>
  );
};
export default PageTurnOverBackword;
