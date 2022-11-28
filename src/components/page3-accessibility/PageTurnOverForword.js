// CSS
import styled, { keyframes } from "styled-components";
// 컴포넌트
import PhoneBackground from "../PhoneBackground";
import TypingText from "./TypingText";
import Text from "./Text";
// 로티 애니메이션
import Lottie from "lottie-react";
import voice from "../../assets/lottie/voice.json";

//-- 애니메이션 --//
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

const opacity = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

//-- 스타일 --//
const LottieContainer = styled.div`
  position: absolute;
  top: 137.77px;
  left: 50%;
  transform: translateX(-50%);
  width: 168px;
  z-index: 3;
`;

const RecommendationContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 283px;
  h5 {
    font-family: "Bold";
    font-size: 21px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #1664d3;
    margin-bottom: 6px;

    animation-duration: 0.9s;
    animation-timing-function: ease-in-out;
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
  p {
    font-family: "Regular";
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #332233;

    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

const TypingTextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 283px;

  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${opacity};
  animation-fill-mode: backwards;
`;

const PageTurnOverForword = ({ textList, isTimeout }) => {
  return (
    <>
      <Text textList={textList} />
      <LottieContainer>
        <Lottie animationData={voice} loop={true} width={168} />
      </LottieContainer>
      {/* 타이핑 에니메이션 페이지 전*/}
      {isTimeout === false && (
        <>
          <RecommendationContainer>
            <h5>“노후연금 추천해줘”</h5>
            <p>라고 말해보세요</p>
          </RecommendationContainer>
        </>
      )}
      {/* 타이핑 에니메이션 페이지*/}
      {isTimeout === true && (
        <>
          <TypingTextContainer>
            <TypingText />
          </TypingTextContainer>
        </>
      )}
      <PhoneBackground />
    </>
  );
};
export default PageTurnOverForword;
