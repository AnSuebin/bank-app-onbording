import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
//로티 테스트
// import Lottie from 'lottie-react';
// import loadingLottie from '../assets/lottie/Inter_voice.json';
import facetalk from '../utils/facetalk.gif';
import myfacetalk from '../utils/myfacetalk.gif';

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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const comeUp = keyframes`
  0%{
    transform: translateY(130px);
  }
  20%{
    transform: translateY(130px);
  }
  40%{
    transform: translateY(92px);
  }
  80%{
    transform: translateY(46px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const MainImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const WhiteGradientBox = styled.div`
  position: absolute;
  width: 294px;
  height: 139px;
  left: 50%;
  top: 187px;
  z-index: 2;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 5.61%,
    rgba(255, 255, 255, 0.660156) 41.5%,
    #ffffff 73.83%
  );
`;

const WhiteBox = styled.div`
  position: absolute;
  width: 294px;
  height: 139px;
  left: 50%;
  top: 334px;
  transform: translateX(-50%);
  background: #ffffff;
  z-index: 4;
`;

const ConvenienceConatiner = styled.div`
  position: absolute;
  width: 294px;
  height: 290px;
  top: 204px;
  left: 50%;
  z-index: 3;
  transform: translate(-133px);
`;

const Conversation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #222222;
  width: ${(props) => props.width};
  height: 38px;
  background: #f8d459;
  border-radius: 2px 20px 20px 20px;
  z-index: 10;
  animation-delay: 0.8s;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-name: ${comeUp};
  animation-fill-mode: backwards;
`;
const Myfacetalk = styled.img`
  position: absolute;
  width: 69px;
  height: 105px;
  left: 50%;
  transform: translateX(60px);
  top: 54px;
  z-index: 5;
`;

const Facetalk = styled.img`
  position: absolute;
  width: 294px;
  height: 290px;
  left: 50%;
  top: 36px;
  transform: translateX(-50%);
  border-radius: 36px 36px 0px 0px;
`;

const Convenience = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 2);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
  }, []);
  return (
    <>
      <Header firstLineColor="#F8D459" secondLineColor="#F8D459" />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          <WhiteGradientBox></WhiteGradientBox>
          <WhiteBox></WhiteBox>
          <Myfacetalk src={myfacetalk} />
          <Facetalk src={facetalk} />
          <ConvenienceConatiner>
            <Conversation width="96px">안녕하세요</Conversation>
            <Conversation width="111px">김리브 고객님</Conversation>
            <Conversation width="181px">회원가입이 어려우신가요?</Conversation>
          </ConvenienceConatiner>
          {/* <PhoneBackground /> */}
        </MainImageContainer>
      </Main>
      <BottomButton
        backLocation="/safety"
        nextLocation="/accessibility"
        delay="5s"
      />
    </>
  );
};

export default Convenience;
