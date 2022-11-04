import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import smallImg from '../utils/intuition/small-img.png';
import bigImg from '../utils/intuition/big-img.png';
import ToggleButton from '../components/ToggleButton';
// 로티
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

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainImageContainer = styled.div`
  /* position: relative; */
  display: flex;
  justify-content: center;
  margin-top: 32px;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const ToggleButtonbox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: absolute;
  top: 241px;
  left: 50%;
  transform: translateX(-50%);
  width: 312px;
  height: 59px;
  padding-left: 26px;
  padding-right: 26px;
  background: #ffffff;
  box-shadow: 0px 5.03756px 21.4096px rgba(0, 0, 0, 0.2);
  border-radius: 12.6793px;
  z-index: 3;
  div {
    font-family: 'SpoqaHanSans';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: #424242;
  }
`;

const ClickIcon = styled.div`
  position: absolute;
  height: 10px;
  left: 50%;
  top: 275px;
  z-index: 4;
  transform: translateX(78px);
`;

const WhiteBox = styled.div`
  position: absolute;
  width: 272px;
  height: 70px;
  top: 234px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 5.61%,
    rgba(255, 255, 255, 0.660156) 41.5%,
    #ffffff 73.83%
  );
  z-index: 1;
`;

const WhiteGradientBox = styled.div`
  display: flex;
  justify-content: center;
  top: 32px;
  width: 272px;
  height: 296px;
  background: #ffffff;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 0px 40px rgba(51, 53, 56, 0.09);
  border-radius: 36px 36px 0px 0px;
`;

const BigWhiteGradientBox = styled.div`
  display: flex;
  justify-content: center;
  top: 32px;
  width: 300px;
  height: 296px;
  background: #ffffff;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 0px 40px rgba(51, 53, 56, 0.09);
  border-radius: 36px 36px 0px 0px;
`;

const SmallPhoneImg = styled.img`
  margin-top: 20px;
  width: 244.1px;
  border-radius: 36px 36px 0px 0px;
`;

const BigPhoneImg = styled.img`
  margin-top: 16px;
  width: 264px;
  height: 276px;
  border-radius: 36px 36px 0px 0px;
`;

const Intuition = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [clickButton, setClickButton] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 6);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
  }, []);

  return (
    <div>
      <Header
        firstLineColor="#F8D459"
        secondLineColor="#F8D459"
        thirdLineColor="#F8D459"
        fouthLindColor="#F8D459"
        fifthLineColor="#F8D459"
        sixthLineColor="#F8D459"
      />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          {clickButton === false && (
            <>
              <WhiteBox></WhiteBox>
              <WhiteGradientBox>
                <SmallPhoneImg src={smallImg}></SmallPhoneImg>
              </WhiteGradientBox>
              <ClickIcon>
                <Lottie
                  animationData={click}
                  loop={true}
                  style={{ width: 34.88 }}
                />
              </ClickIcon>
            </>
          )}

          {clickButton === true && (
            <>
              <WhiteBox></WhiteBox>
              <BigWhiteGradientBox>
                <BigPhoneImg src={bigImg}></BigPhoneImg>
              </BigWhiteGradientBox>
            </>
          )}

          <ToggleButtonbox>
            <div>보던 화면 그대로, 큰 글씨로</div>
            <ToggleButton
              onChange={() => {
                setClickButton(!clickButton);
              }}
            />
          </ToggleButtonbox>
        </MainImageContainer>
      </Main>
      {clickButton === true && (
        <BottomButton backLocation="/economics" nextLocation="/" />
      )}
    </div>
  );
};

export default Intuition;
