// 훅
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
// 컴포넌트
import Header from '../../components/Header';
import Title from '../../components/Title';
import WhiteGradientBox from '../../components/WhiteGradientBox';
import WhiteBox from '../../components/WhiteBox';
import Conversation from './components/Conversation';
import BottomButton from '../../components/BottomButton';
// 데이터
import { mockData } from '../../data/mockData';
// 이미지
import facetalk from '../../utils/convenience/facetalk.gif';
import myfacetalk from '../../utils/convenience/myfacetalk.gif';

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

//-- 스타일 --//
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainImageContainer = styled.div`
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
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

const Facetalk = styled.img`
  position: absolute;
  width: 312px;
  height: 296px;
  left: 50%;
  top: 32px;
  transform: translateX(-50%);
  border-radius: 36px 36px 0px 0px;
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
          <WhiteGradientBox />
          <WhiteBox />
          <Myfacetalk src={myfacetalk} alt="나의 대화화면" />
          <Facetalk src={facetalk} alt="상담사 대화화면" />
          <Conversation conversations={conversation} />
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
