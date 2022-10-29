import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import WaringIcon from '../utils/safety/waring-icon.png';
import bankIcon from '../utils/safety/bank-icon.png';

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
  top: 62px;
  width: 242px;
  height: 127px;
  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 5px 5px 12px rgba(144, 145, 146, 0.2);
  padding: 17px 20px;
  img {
    width: 40px;
  }
  p {
    margin-top: 10px;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    word-break: keep-all;
    width: 175px;
    letter-spacing: -0.02em;
    color: #343434;
  }
`;

const BankName = styled.div`
  margin-left: 8px;
  h5 {
    font-weight: 700;
    font-size: 11px;
    line-height: 14px;
  }
  p {
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #979797;
  }
`;

const BankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 32px;
  }
`;

const DeleteBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 207px;
  left: 50%;
  transform: translateX(-50%);
  width: 242px;
  height: 66px;
  border-radius: 14px;
  background: #ffffff;
  border: 2.53448px solid #ffc544;
  box-shadow: 5.06896px 5.06896px 12.6724px rgba(144, 145, 146, 0.2);
  padding: 17px 20px 17px 20px;
  button {
    width: 38px;
    height: 24px;
    font-weight: 700;
    font-size: 10px;
    background: #ffc544;
    border: none;
    border-radius: 4px;
  }
`;

const Safety = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [text, setText] = useState('');

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
          <WarningBox>
            <img src={WaringIcon} alt="악성앱 탐지 아이콘" />
            <p>{text}</p>
          </WarningBox>
          <DeleteBox>
            <BankContainer>
              <img src={bankIcon} alt="kb 국민은행 app 아이콘" />
              <BankName>
                <h5>KB 국민은행</h5>
                <p>KB 국민은행 KB 국민은행</p>
              </BankName>
            </BankContainer>
            <button>삭제</button>
          </DeleteBox>
        </MainImageContainer>
        <PhoneBackground />
      </Main>
      <BottomButton backLocation="/" nextLocation="/convenience" />
    </>
  );
};

export default Safety;
