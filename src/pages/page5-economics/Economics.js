// 훅
import { useEffect, useState } from 'react';
// CSS
import styled, { keyframes } from 'styled-components';
// 컴포넌트
import Header from '../../components/Header';
import Title from '../../components/Title';
import WhiteGradientBox from '../../components/WhiteGradientBox';
import WhiteBox from '../../components/WhiteBox';
import EventBox from './components/EventBox';
import Click from '../../components/Click';
import SmallPhoneBackground from './components/SmallPhoneBackground';
import EventDetail from './components/EventDetail';
import BottomButton from '../../components/BottomButton';
// 데이터
import { mockData } from '../../data/mockData';

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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const Economics = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [mainText, setMainText] = useState([]);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 5);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
    setMainText(pageData.Main);
  }, []);
  return (
    <div>
      <Header
        firstLineColor="#F8D459"
        secondLineColor="#F8D459"
        thirdLineColor="#F8D459"
        fouthLindColor="#F8D459"
        fifthLineColor="#F8D459"
      />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          <WhiteGradientBox />
          <WhiteBox />
          {/* 클릭 전 */}
          {isClick === false && (
            <>
              <EventBox
                mainText={mainText}
                onClick={() => {
                  setIsClick(true);
                }}
              />
              <Click
                top="260px"
                transform="translateX(65px)"
                animationData="click"
                onClick={() => {
                  setIsClick(true);
                }}
              />
              <SmallPhoneBackground />
            </>
          )}
          {/* 클릭 후 */}
          {isClick === true && <EventDetail />}
        </MainImageContainer>
      </Main>
      {isClick === true && (
        <BottomButton
          backLocation="/professionalism"
          nextLocation="/intuition"
          delay="0.75s"
        />
      )}
    </div>
  );
};

export default Economics;
