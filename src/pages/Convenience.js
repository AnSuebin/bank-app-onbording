import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

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

const ConvenienceConatiner = styled.div`
  position: absolute;
  width: 294px;
  height: 290px;
  top: 168px;
  left: 50%;
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
  z-index: 1;
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
          <ConvenienceConatiner>
            <Conversation width="96px">안녕하세요</Conversation>
            <Conversation width="111px">김리브 고객님</Conversation>
            <Conversation width="181px">회원가입이 어려우신가요?</Conversation>
          </ConvenienceConatiner>
          <PhoneBackground />
        </MainImageContainer>
      </Main>
      <BottomButton backLocation="/safety" nextLocation="/accessibility" />
    </>
  );
};

export default Convenience;
