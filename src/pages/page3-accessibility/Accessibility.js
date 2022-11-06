//훅
import { useEffect, useState } from 'react';
// CSS
import styled, { keyframes } from 'styled-components';
// 컴포넌트
import BottomButton from '../../components/BottomButton';
import Title from '../../components/Title';
import Header from '../../components/Header';
import PhoneBackground from '../../components/PhoneBackground';
import TypingText from './components/TypingText';
import Text from './components/Text';
import WhiteBox from '../../components/WhiteBox';
import WhiteGradientBox from '../../components/WhiteGradientBox';
import WhitePhoneBackground from '../../components/WhitePhoneBackground';
//데이터
import { mockData } from '../../data/mockData';
// 이미지 및 애니메이션
import Recommendation from '../../utils/accessibility/recommendation.png';
import Lottie from 'lottie-react';
import voice from '../../assets/lottie/voice.json';

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

const ScrollUp = keyframes`
from {
  transform: translateY(0);
}
to {

  transform: translateY(-284px);
}
`;

//-- 스타일 --//
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

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
    font-family: 'Bold';
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
    font-family: 'Regular';
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
`;

const Accessibility = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [textList, setTextList] = useState([]);
  const [isTimeout, setIsTimeout] = useState(false);
  const [PageTurnOver, setPageTurnOver] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 3);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
    setTextList(pageData.text);
  }, []);

  // 타이핑 타이밍 세팅
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimeout(true);
    }, 2750);
    return () => {
      clearTimeout(timeout);
    };
  }, [isTimeout]);

  // 화면 전환 타이밍 세팅
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageTurnOver(true);
    }, 8650);
    return () => {
      clearTimeout(timeout);
    };
  }, [PageTurnOver]);

  return (
    <div>
      <Header
        firstLineColor="#F8D459"
        secondLineColor="#F8D459"
        thirdLineColor="#F8D459"
      />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          {/* 페이지 전환 전 */}
          {PageTurnOver === false && (
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
          )}
          {/* 페이지 전환 후 */}
          {PageTurnOver === true && (
            <>
              <RecomendInfo>
                <div>
                  <img src={Recommendation} alt="연금 추천 상품" />
                </div>
              </RecomendInfo>
              <WhitePhoneBackground />
              <WhiteGradientBox />
              <WhiteBox />
            </>
          )}
        </MainImageContainer>
      </Main>
      {PageTurnOver === true && (
        <BottomButton
          backLocation="/convenience"
          nextLocation="/professionalism"
        />
      )}
    </div>
  );
};

export default Accessibility;
