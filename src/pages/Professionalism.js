import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';

import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import portfolio from '../utils/professionalism/portfolio.png';

import rectangle from '../utils/professionalism/rectangle.png';

import Lottie from 'lottie-react';
import click from '../assets/lottie/click.json';

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

  transform: translateY(-310px);
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

const InfoBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 191px;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  h5 {
    margin-top: 65.01px;
    font-family: 'SpoqaHanSans';
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #343434;
  }
  img {
    margin-top: 30px;
    width: 96px;
    height: 50px;
  }
  h3 {
    padding-top: 11.88px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  p {
    padding-top: 7px;
    font-family: 'SpoqaHanSans';
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: #8f989c;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 245px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  width: 268px;
  height: 56px;
  border-radius: 14px;
  background: #ffd547;
  border: 1px solid #ffcf2b;
  box-shadow: 0px 8px 11px rgba(84, 76, 49, 0.1);
  border-radius: 9px;
  padding: 17px 20px 17px 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #343434;
`;
const ClickIcon = styled.div`
  position: absolute;
  height: 10px;
  left: 50%;
  top: 265px;
  z-index: 3;
  transform: translateX(35px);
`;

const WhiteGradientBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 32px;
  width: 312px;
  height: 296px;
  background: #ffffff;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 0px 40px rgba(51, 53, 56, 0.09);
  border-radius: 36px 36px 0px 0px;
  overflow: hidden;
  div:last-child {
    overflow: hidden;
    margin-top: 20px;
    display: flex;
    justify-content: center;
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
              <InfoBox>
                <h5>{mainText.subTitle}</h5>
                <img src={rectangle} alt="blank" />
                <h3>{mainText.title}</h3>
                <p>{mainText.text}</p>
              </InfoBox>
              <SubmitButton
                onClick={() => {
                  setIsClick(true);
                }}
              >
                제안받기
              </SubmitButton>
              <ClickIcon>
                <Lottie
                  animationData={click}
                  loop={true}
                  style={{ width: 34.88 }}
                  onClick={() => {
                    setIsClick(true);
                  }}
                />
              </ClickIcon>
              <WhiteGradientBox></WhiteGradientBox>
            </div>
          )}

          {/* 클릭 후 */}
          {isClick === true && (
            <WhiteGradientBox>
              <div>
                <Portfolio src={portfolio}></Portfolio>
              </div>
            </WhiteGradientBox>
          )}
          <WhiteBox></WhiteBox>
          <WhiteBlindBox></WhiteBlindBox>
        </MainImageContainer>
      </Main>
      {/* {isClick === true && ( */}
      <BottomButton
        backLocation="/accessibility"
        nextLocation="/economics"
        delay="1.65s"
      />
      {/* )} */}
    </div>
  );
};

export default Professionalism;
