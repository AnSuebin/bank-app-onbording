import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import WaringIcon from '../utils/safety/warning-icon.png';
import bankIcon from '../utils/safety/bank-icon.png';
// 로티
import Lottie from 'lottie-react';
import complete from '../assets/lottie/complete.json';

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

const WarningBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  top: 56px;
  width: 268px;
  height: 136px;
  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 5px 5px 12px rgba(144, 145, 146, 0.2);
  padding: 17px 20px;
  img {
    width: 44px;
  }
  p {
    margin-top: 8px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    text-align: center;
    word-break: keep-all;
    width: 213px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  div {
    position: relative;
  }
`;
const Yellowline = styled.div`
  width: 83px;
  height: 3px;
  background: #ffc544;
  border-radius: 2px;
  z-index: -1;
  position: absolute;
  transform: translate(-5px, -6px);
`;

const DeleteBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 204px;
  left: 50%;
  transform: translateX(-50%);
  width: 268px;
  height: 80px;
  border-radius: 14px;
  background: #ffffff;
  border: 2.5px solid #ffc544;
  box-shadow: 5.06896px 5.06896px 12.6724px rgba(144, 145, 146, 0.2);
  padding: 20px;
  button {
    width: 56px;
    height: 32px;
    background: #ffc544;
    border: none;
    border-radius: 4px;
    color: #222222;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
  }
`;

const BankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
  }
`;

const BankName = styled.div`
  margin-left: 8px;
  position: relative;
  h5 {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #222222;
    span {
      position: absolute;
      margin-left: 10px;
      font-family: 'Spoqa Han Sans Neo';
      font-weight: 500;
      font-size: 11px;
      color: #f43e3e;
    }
    div {
      position: absolute;
      width: 14px;
      height: 14px;
      border: 1px solid #f43e3e;
      display: inline-block;
      border-radius: 50%;
      transform: translate(3.5px);
    }
  }
  p {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: -0.02em;

    color: #8f989c;
  }
`;

const SuccessContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  top: 104px;
  div:nth-child(2) {
    margin-top: 8px;
    width: 120px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 15px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #222222;
    animation-duration: 0.75s;
    animation-timing-function: ease-in-out;
    animation-name: ${opacity};
    animation-fill-mode: forwards;
  }
`;

const Safety = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [text, setText] = useState('');
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 1);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
    setText(pageData.text);
  }, []);

  return (
    <>
      <Header firstLineColor="#F8D459" />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          {/* 클릭 전 */}
          {isClick === false && (
            <>
              <WarningBox>
                <img src={WaringIcon} alt="악성앱 탐지 아이콘" />
                <p>{text}</p>
                <div>
                  <Yellowline></Yellowline>
                </div>
              </WarningBox>
              <DeleteBox>
                <BankContainer>
                  <img src={bankIcon} alt="kb 국민은행 app 아이콘" />
                  <BankName>
                    <h5>
                      KB 국민은행<span>!</span>
                      <div></div>
                    </h5>
                    <p>IP:Rag26w_sh4</p>
                  </BankName>
                </BankContainer>
                <button
                  onClick={() => {
                    setIsClick(true);
                  }}
                >
                  삭제
                </button>
              </DeleteBox>
            </>
          )}
          {isClick === true && (
            <SuccessContainer>
              <Lottie
                animationData={complete}
                loop="false"
                style={{ height: 84 }}
              />
              <div>악성앱을 성공적으로 삭제했습니다!</div>
            </SuccessContainer>
          )}
        </MainImageContainer>
        <PhoneBackground />
      </Main>
      {isClick === true && (
        <BottomButton backLocation="/" nextLocation="/convenience" />
      )}
    </>
  );
};

export default Safety;
