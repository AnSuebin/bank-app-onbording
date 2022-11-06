// 훅
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
// 컴포넌트
import Header from '../../components/Header';
import Title from '../../components/Title';
import Recommendation from './components/Recommendation';
import SubmitButton from './components/SubmitButton';
import Click from '../../components/Click';
import WhitePhoneBackground from '../../components/WhitePhoneBackground';
import WhiteBox from '../../components/WhiteBox';
import WhiteGradientBox from '../../components/WhiteGradientBox';
import BottomButton from '../../components/BottomButton';
// 데이터
import { mockData } from '../../data/mockData';
// 이미지 및 애니메이션
import portfolio from '../../utils/professionalism/portfolio.png';

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

const ScrollUp = keyframes`
from {
  transform: translateY(0);
}
to {

  transform: translateY(-300px);
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

const PortfolioContainer = styled.div`
  position: absolute;

  top: 32px;
  left: 50%;
  transform: translateX(-50%);

  width: 312px;
  height: 296px;

  overflow: hidden;
  z-index: 1;
  div {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    overflow: hidden;
  }
`;

const Portfolio = styled.img`
  width: 280px;
  border-radius: 36px 36px 0px 0px;

  animation-delay: 0.75s;
  animation-duration: 0.9s;
  animation-timing-function: ease-in;
  animation-name: ${ScrollUp};
  animation-fill-mode: forwards;
`;

const Professionalism = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [mainText, setMainText] = useState([]);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 4);
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
      />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          {/* 클릭 전 */}
          {isClick === false && (
            <div>
              <Recommendation mainText={mainText} />
              <SubmitButton
                onClick={() => {
                  setIsClick(true);
                }}
              />
              <Click
                top="265px"
                transform="translateX(35px)"
                onClick={() => {
                  setIsClick(true);
                }}
              />
            </div>
          )}

          {/* 클릭 후 */}
          {isClick === true && (
            <>
              <PortfolioContainer>
                <div>
                  <Portfolio src={portfolio}></Portfolio>
                </div>
              </PortfolioContainer>
            </>
          )}
          <WhitePhoneBackground />
          <WhiteBox />
          <WhiteGradientBox />
        </MainImageContainer>
      </Main>
      {isClick === true && (
        <BottomButton
          backLocation="/accessibility"
          nextLocation="/economics"
          delay="1.65s"
        />
      )}
    </div>
  );
};

export default Professionalism;
