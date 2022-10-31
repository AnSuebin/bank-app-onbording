import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../utils/economics/logo-icon.png';
import menu from '../utils/economics/menu-icon.png';
import point from '../utils/economics/point-img.png';
import eventDetail from '../utils/economics/event.png';

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

const comeUpandDown = keyframes`
from{
  transform: translate(-50%, 200px);
}
to{
  transform: translateY(-50%, 0px);
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

const WhiteGradientBox = styled.div`
  position: absolute;
  width: 294px;
  height: 90px;
  left: 50%;
  top: 236px;
  z-index: 3;
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
  height: 250px;
  left: 50%;
  top: 316px;
  transform: translateX(-50%);
  background: #ffffff;
  z-index: 3;
`;

const LogoImg = styled.img`
  width: 104px;
  height: 22px;
  z-index: -1;
`;

const MenuImg = styled.img`
  width: 18px;
  height: 18px;
  z-index: -1;
`;

const EventBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  padding: 20.25px 27.5px;
  z-index: 2;
  top: 133px;
  left: 50%;
  transform: translateX(-50%);
  width: 262px;
  height: 184px;
  background: #fff2d7;
  border-radius: 14px 14px 0px 0px;

  animation-duration: 1.7s;
  animation-timing-function: ease-in;
  animation-name: ${comeUpandDown};
  animation-fill-mode: none;
  p {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  h2 {
    margin-top: 15.5px;
    width: 96px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.02em;

    color: #222222;
  }
  img {
    position: absolute;
    right: 20.03px;
    top: 69px;
    width: 121.61px;
    height: 72px;
  }
`;

const BlackPhone = styled.div`
  position: absolute;
  z-index: 1;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: 294px;
  height: 290px;
  border-radius: 36.75px 36.75px 0px 0px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  opacity: 0.45;
`;

const PhoneHeader = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 22px 28px 0px 17px;
  z-index: -1;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: 294px;
  height: 290px;
`;

const EventDetailWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: center;
  padding-top: 28px;
  top: 36px;
  left: 50%;
  transform: translateX(-50%);
  width: 294px;
  height: 270px;
  background: linear-gradient(180deg, #e9ecef 0%, rgba(233, 236, 239, 0) 100%);
  border-radius: 36px 36px 0px 0px;

  div {
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 1px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    img {
      width: 266px;
      height: 383px;
      margin-bottom: 30px;
      mix-blend-mode: darken;
      animation-duration: 0.75s;
      animation-timing-function: ease-in-out;
      animation-name: ${opacity};
      animation-fill-mode: forwards;
    }
  }
`;

const Economics = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 5);
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
      />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          <WhiteGradientBox></WhiteGradientBox>
          <WhiteBox></WhiteBox>
          {isClick === false && (
            <>
              <EventBox
                onClick={() => {
                  setIsClick(true);
                }}
              >
                <p>[KB스타페이적금] 가입 이벤트</p>
                <h2>최고 연 6% 적금 가입</h2>
                <img src={point}></img>
              </EventBox>
              <BlackPhone></BlackPhone>
              <PhoneHeader>
                <LogoImg src={logo} alt="국민은행 로고" />
                <MenuImg src={menu} alt="메뉴" />
              </PhoneHeader>
            </>
          )}
          {isClick === true && (
            <EventDetailWrapper>
              <div>
                <img src={eventDetail} />
              </div>
            </EventDetailWrapper>
          )}
        </MainImageContainer>
        {isClick === false && (
          <>
            <PhoneBackground />
          </>
        )}
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
