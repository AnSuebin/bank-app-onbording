import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import portfolio from '../utils/professionalism/portfolio.png';

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
  height: 122px;
  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 5px 5px 12px rgba(144, 145, 146, 0.2);
  padding: 17px 20px;
  h5 {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  h3 {
    padding-top: 12px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  div {
    position: relative;
  }
  p {
    padding-top: 8px;
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #8f989c;
  }
`;

const Yellowline = styled.div`
  position: absolute;
  width: 80px;
  height: 3px;
  background: #ffc544;
  border-radius: 2px;
  z-index: -1;
  transform: translateY(-5.5px);
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 1;
  top: 190px;
  left: 50%;
  transform: translateX(-50%);

  width: 268px;
  height: 56px;
  border-radius: 14px;
  background: #ffc544;
  border: none;
  box-shadow: 5.06896px 5.06896px 12.6724px rgba(144, 145, 146, 0.2);
  padding: 17px 20px 17px 20px;

  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #343434;
`;

const WhiteGradientBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 32px;
  width: 312px;
  height: 296px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 36px 36px 0px 0px;
  overflow: hidden;
  div {
    display: flex;
    justify-content: center;
    margin-top: 20px;
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
  top: 266px;
  width: 312px;
  height: 70px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 5.61%,
    rgba(255, 255, 255, 0.660156) 41.5%,
    #ffffff 73.83%
  );
  z-index: 4;
`;

// const GraphBox = styled.div`
//   box-sizing: border-box;
//   position: absolute;
//   /* display: flex;
//   justify-content: center;
//   align-items: flex-end; */
//   z-index: 1;
//   left: 50%;
//   transform: translateX(-50%);
//   top: 152px;
//   width: 242px;
//   height: 146px;
//   border-radius: 14px;
//   background-color: #ffffff;
//   box-shadow: 5px 5px 12px rgba(144, 145, 146, 0.2);
// `;
// const GrapAnimationContainer = styled.div`
//   margin-top: -20px;
// `;

// const Grap = styled.div`
//   border-radius: 4px 4px 0 0;
//   width: 20.93px;
//   height: ${(props) => props.height};
//   background: ${(props) => props.background};
//   margin: 0 7.785px 0 7.785px;
// `;

// const InfoContainer = styled.div`
//   position: absolute;
//   display: grid;
//   width: 230px;
//   grid-template-columns: repeat(2, 101px);
//   grid-row-gap: 8px;
//   grid-column-gap: 28px;
//   z-index: 1;
//   left: 50%;
//   transform: translateX(-50%);
//   top: 77px;
// `;

// const Info = styled.div`
//   display: flex;
//   align-items: center;
//   animation-duration: 0.75s;
//   animation-timing-function: ease-in-out;
//   animation-name: ${opacity};
//   animation-fill-mode: forwards;
//   h5 {
//     margin-left: 8px;
//     font-family: 'Spoqa Han Sans Neo';
//     font-weight: 500;
//     font-size: 14px;
//     letter-spacing: -0.02em;
//     color: #343434;
//   }
//   p {
//     margin-left: 8px;
//     font-family: 'Spoqa Han Sans Neo';
//     font-weight: 500;
//     font-size: 11px;
//     letter-spacing: -0.02em;
//     color: #979797;
//   }
// `;

// const Circle = styled.div`
//   width: 11px;
//   height: 11px;
//   border-radius: 50%;
//   background-color: ${(props) => props.background};
// `;

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
            <>
              <InfoBox>
                <h5>{mainText.subTitle}</h5>
                <h3>{mainText.title}</h3>
                <div>
                  <Yellowline></Yellowline>
                </div>
                <p>{mainText.text}</p>
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
              <WhiteGradientBox>
                <div>
                  <Portfolio src={portfolio}></Portfolio>
                </div>
              </WhiteGradientBox>
              <WhiteBox></WhiteBox>
              {/* <InfoContainer>
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
                <GrapAnimationContainer>
                  <Lottie
                    animationData={chart}
                    loop="true"
                    style={{ height: 195 }}
                  />
                </GrapAnimationContainer>
                {/* <Grap height="69.52px" background="#D65C49"></Grap>
                <Grap height="80.15px" background="#E38337"></Grap>
                <Grap height="102.32px" background="#9DB953"></Grap>
                <Grap height="50.51px" background="#5BBACE"></Grap> */}
              {/* </GraphBox>  */}
            </>
          )}
          {isClick === false && <PhoneBackground />}
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
