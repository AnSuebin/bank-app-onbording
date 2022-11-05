import BottomButton from '../../components/BottomButton';
import Title from '../../components/Title';
import Header from '../../components/Header';
import PhoneBackground from '../../components/PhoneBackground';
import { mockData } from '../../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import TypingText from '../../components/TypingText';
import Recommendation from '../../utils/accessibility/recommendation.png';

import Lottie from 'lottie-react';
import voice from '../../assets/lottie/voice.json';

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
  div {
  }
`;

const TextContainer = styled.div`
  margin-top: 60px;
  position: absolute;
  div {
    margin-bottom: 13px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #7d868f;
  }
`;

const LottieContainer = styled.div`
  position: absolute;
  margin-top: 154px;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${opacity};
  animation-fill-mode: forwards;
`;

const TypingTextContainer = styled.div`
  position: absolute;
  margin-top: 283px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${opacity};
  animation-fill-mode: backwards;
`;

const ConversationContainer = styled.div`
  position: absolute;
  margin-top: 283px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #1664d3;
    margin-bottom: 6px;
    display: 0.5s;
    animation-duration: 0.9s;
    animation-timing-function: ease-in-out;
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
  p {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #332233;
    display: 0.7s;
    animation-duration: 1.2s;
    animation-timing-function: ease-in-out;
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

const WhiteBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 258px;
  width: 360px;
  height: 70px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 5.61%,
    rgba(255, 255, 255, 0.660156) 41.5%,
    #ffffff 73.83%
  );
  z-index: 4;
`;

const WhiteBlindBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 328px;
  width: 360px;
  height: 70px;
  background: #ffffff;
`;

const TurnOverContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  top: 32px;
  width: 312px;
  height: 296px;
  background: #ffffff;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 0px 40px rgba(51, 53, 56, 0.09);
  border-radius: 36px 36px 0px 0px;
  div {
    margin-top: 20px;
    overflow: hidden;
    img {
      width: 280px;
      animation-delay: 0.75s;
      animation-duration: 0.9s;
      animation-timing-function: ease-in;
      animation-name: ${ScrollUp};
      animation-fill-mode: forwards;
    }
  }
`;

const Accessibility = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [isTimeout, setIsTimeout] = useState(false);
  const [turnOver, setTurnOver] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 3);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimeout(true);
    }, 2750);
    return () => {
      clearTimeout(timeout);
    };
  }, [isTimeout]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTurnOver(true);
    }, 8650);
    return () => {
      clearTimeout(timeout);
    };
  }, [turnOver]);

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
          {turnOver === false && (
            <>
              <TextContainer>
                <div>“잔액 보여줘”</div>
                <div>“금리 알려줘”</div>
                <div>“잔액 보여줘”</div>
              </TextContainer>
              {isTimeout === true && (
                <>
                  <LottieContainer>
                    <Lottie animationData={voice} loop={true} />
                  </LottieContainer>
                  <TypingTextContainer>
                    <TypingText />
                  </TypingTextContainer>
                </>
              )}
              {isTimeout === false && (
                <ConversationContainer>
                  <h5>“노후연금 추천해줘”</h5>
                  <p>라고 말해보세요</p>
                </ConversationContainer>
              )}
              <PhoneBackground />
            </>
          )}
          {turnOver === true && (
            <>
              <TurnOverContainer>
                <div>
                  <img src={Recommendation} alt="연금 추천 상품" />
                </div>
              </TurnOverContainer>
              <WhiteBox></WhiteBox>
              <WhiteBlindBox></WhiteBlindBox>
            </>
          )}
        </MainImageContainer>
      </Main>
      {turnOver === true && (
        <BottomButton
          backLocation="/convenience"
          nextLocation="/professionalism"
        />
      )}
    </div>
  );
};

export default Accessibility;
