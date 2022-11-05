import BottomButton from '../../components/BottomButton';
import Title from '../../components/Title';
import Header from '../../components/Header';
import { mockData } from '../../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../utils/economics/logo-icon.png';
import menu from '../../utils/economics/menu-icon.png';
import point from '../../utils/economics/point-img.png';
import eventDetail from '../../utils/economics/event.png';

// 로티
import Lottie from 'lottie-react';
import coin from '../../assets/lottie/coin.json';
import click from '../../assets/lottie/click.json';

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

const fadeInbutton = keyframes`
from {
  opacity: 0.5;
  transform: translate(-50%, 50px);
}
to {
  opacity: 1;
  transform: translate(-50%,0);
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
  width: 312px;
  height: 76px;
  left: 50%;
  top: 262px;
  z-index: 3;
  transform: translateX(-50%);
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
  z-index: 1;
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
  padding-top: 32px;
  z-index: 3;
  top: 85px;
  left: 50%;
  transform: translateX(-50%);
  width: 312px;
  height: 231px;
  background: #fdf1d7;
  border: 2px solid #ffc544;
  border-radius: 14px;
  animation-delay: 0.25s;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeInbutton};
  animation-fill-mode: backwards;
  p {
    margin-left: 32px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  h2 {
    margin-top: 12px;
    margin-left: 32px;
    width: 100px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 21px;
    letter-spacing: -0.02em;
    color: #222222;
    line-height: 32px;
    span {
      font-weight: 700;
    }
  }
  img {
    position: absolute;
    right: 32px;
    top: 56px;
    width: 125px;
    height: 83px;
  }
  button {
    margin-top: 21px;
    margin-left: 22px;
    width: 268px;
    height: 56px;
    background: #ffc544;
    border: 2.5px solid #ffc544;
    box-shadow: 5.06896px 5.06896px 12.6724px rgba(144, 145, 146, 0.2);
    border-radius: 14px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #343434;
  }
`;

const ClickIcon = styled.div`
  position: absolute;
  height: 10px;
  left: 50%;
  top: 260px;
  z-index: 3;
  transform: translateX(65px);
`;

const SmallPhone = styled.div`
  position: absolute;
  z-index: 1;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 272px;
  height: 304px;
  background: linear-gradient(
    180deg,
    #e9ecef 74.01%,
    rgba(233, 236, 239, 0) 100%
  );
  border-radius: 36px 36px 0px 0px;
`;

const PhoneHeader = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 18px 28px 0px 19px;
  z-index: 2;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 272px;
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
  width: 312px;
  height: 296px;
  background: #ffffff;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 0px 40px rgba(51, 53, 56, 0.09);
  border-radius: 36px 36px 0px 0px;
  div {
    overflow: hidden;
    div:nth-child(1) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
    }
    img {
      width: 280px;
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
          <WhiteGradientBox />
          <WhiteBlindBox />
          {/* <WhiteBox></WhiteBox> */}
          {isClick === false && (
            <>
              <EventBox>
                <p>KB스타페이적금 가입 이벤트</p>
                <h2>
                  <span>최고 연 6%</span>적금 가입
                </h2>
                <img src={point} alt="클릭"></img>
                <button
                  onClick={() => {
                    setIsClick(true);
                  }}
                >
                  이벤트 확인해보기
                </button>
              </EventBox>
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
              <SmallPhone></SmallPhone>
              <PhoneHeader>
                <LogoImg src={logo} alt="국민은행 로고" />
                <MenuImg src={menu} alt="메뉴" />
              </PhoneHeader>
            </>
          )}
          {isClick === true && (
            <EventDetailWrapper>
              <div>
                <Lottie animationData={coin} loop="false" />
                <img src={eventDetail} alt="적금 이벤트" />
              </div>
            </EventDetailWrapper>
          )}
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
