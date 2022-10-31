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

const InfoBox = styled.div`
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
  h5 {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  h3 {
    padding-top: 5px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  p {
    padding-top: 5px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: -0.02em;
    color: #979797;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 207px;
  left: 50%;
  transform: translateX(-50%);
  width: 242px;
  height: 66px;
  border-radius: 14px;

  background: #f8d459;
  border: none;
  box-shadow: 5.06896px 5.06896px 12.6724px rgba(144, 145, 146, 0.2);
  padding: 17px 20px 17px 20px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #222222;
`;

const GraphBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  top: 152px;
  width: 242px;
  height: 146px;
  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 5px 5px 12px rgba(144, 145, 146, 0.2);
  padding-bottom: 22.49px;
`;

const Grap = styled.div`
  border-radius: 4px 4px 0 0;
  width: 20.93px;
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  margin: 0 7.785px 0 7.785px;
`;

const InfoContainer = styled.div`
  position: absolute;
  display: grid;
  width: 230px;
  grid-template-columns: repeat(2, 101px);
  grid-row-gap: 8px;
  grid-column-gap: 28px;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  top: 77px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${opacity};
  animation-fill-mode: forwards;
  h5 {
    margin-left: 8px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  p {
    margin-left: 8px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 11px;
    letter-spacing: -0.02em;
    color: #979797;
  }
`;

const Circle = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
`;

const Professionalism = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 4);
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
      />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          {/* 클릭 전 */}
          {isClick === false && (
            <>
              <InfoBox>
                <h5>로보쌤이 제안한 포트폴리오!</h5>
                <h3>안전추구형</h3>
                <p>2020.03.11 투자성향기준</p>
              </InfoBox>
              <SubmitButton
                onClick={() => {
                  setIsClick(true);
                }}
              >
                제안받기
              </SubmitButton>
            </>
          )}
          {/* 클릭 후 */}

          {isClick === true && (
            <>
              <InfoContainer>
                <Info>
                  <Circle background="#D65C49"></Circle>
                  <h5>국내채권</h5>
                  <p>56%</p>
                </Info>
                <Info>
                  <Circle background="#E38337"></Circle>
                  <h5>국내채권</h5>
                  <p>56%</p>
                </Info>
                <Info>
                  <Circle background="#9DB953"></Circle>
                  <h5>국내채권</h5>
                  <p>56%</p>
                </Info>
                <Info>
                  <Circle background="#5BBACE"></Circle>
                  <h5>국내채권</h5>
                  <p>56%</p>
                </Info>
              </InfoContainer>
              <GraphBox>
                <Grap height="69.52px" background="#D65C49"></Grap>
                <Grap height="80.15px" background="#E38337"></Grap>
                <Grap height="102.32px" background="#9DB953"></Grap>
                <Grap height="50.51px" background="#5BBACE"></Grap>
              </GraphBox>
            </>
          )}

          <PhoneBackground />
        </MainImageContainer>
      </Main>
      {isClick === true && (
        <BottomButton backLocation="/accessibility" nextLocation="/economics" />
      )}
    </div>
  );
};

export default Professionalism;
