import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import facetalk from '../utils/convenience/facetalk.gif';
import myfacetalk from '../utils/convenience/myfacetalk.gif';

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
  width: 312px;
  height: 139px;
  left: 50%;
  top: 190px;
  z-index: 2;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 21.58%,
    rgba(255, 255, 255, 0.463542) 49.56%,
    #ffffff 85.92%
  );
`;

const WhiteBox = styled.div`
  position: absolute;
  width: 312px;
  height: 139px;
  left: 50%;
  top: 325.9px;
  transform: translateX(-50%);
  background: #ffffff;
  z-index: 4;
`;

const ConvenienceConatiner = styled.div`
  position: absolute;
  height: 290px;
  top: 196px;
  left: 50%;
  z-index: 3;
  transform: translate(-136px);
`;

const Conversation = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.02em;
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

const Facetalk = styled.img`
  position: absolute;
  width: 312px;
  height: 296px;
  left: 50%;
  top: 32px;
  transform: translateX(-50%);
  border-radius: 36px 36px 0px 0px;
`;

const Myfacetalk = styled.img`
  position: absolute;
  width: 72px;
  height: 104px;
  left: 50%;
  transform: translateX(64px);
  top: 52px;
  z-index: 5;
`;

const Convenience = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 2);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
    setConversation(pageData.text);
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
            {conversation.map((conversation) => (
              <Conversation width={`${conversation.length * 11.5}px`}>
                {conversation}
              </Conversation>
            ))}
          </ConvenienceConatiner>
        </MainImageContainer>
      </Main>
      <BottomButton
        backLocation="/safety"
        nextLocation="/accessibility"
        delay="4.7s"
      />
    </>
  );
};

export default Convenience;
