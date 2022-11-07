// 훅
import { useEffect, useState } from 'react';
// CSS
import styled, { keyframes } from 'styled-components';
// 컴포넌트
import Header from '../../components/Header';
import Title from '../../components/Title';
import WhiteBox from '../../components/WhiteBox';
import WhiteGradientBox from '../../components/WhiteGradientBox';
import Click from '../../components/Click';
import SelectBox from './components/SelectBox';
import BottomButton from '../../components/BottomButton';
// 데이터
import { mockData } from '../../data/mockData';
// 이미지 및 애니메이션
import smallImg from '../../utils/intuition/small-img.png';
import bigImg from '../../utils/intuition/big-img.png';
import shadow from '../../utils/intuition/shadow.png';
import smallShadow from '../../utils/intuition/small-shadow.png';

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
  display: flex;
  justify-content: center;
  margin-top: 32px;

  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const WhiteSmallPhone = styled.div`
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

const SmallPhoneImg = styled.img`
  margin-top: 20px;
  width: 244.1px;
  border-radius: 36px 36px 0px 0px;
`;

const WhiteBigPhone = styled.div`
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

const BigPhoneImg = styled.img`
  margin-top: 16px;
  width: 264px;
  height: 276px;
  border-radius: 36px 36px 0px 0px;
`;

const Shadow = styled.img`
  width: 305px;
  height: 25px;
  position: absolute;
  top: 207px;
`;

const Intuition = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [mainText, setMainText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 6);
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
        sixthLineColor="#F8D459"
      />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          <WhiteBox></WhiteBox>
          <WhiteGradientBox></WhiteGradientBox>
          {isChecked === false && (
            <>
              <WhiteSmallPhone>
                <SmallPhoneImg src={smallImg} alt="기본 모드"></SmallPhoneImg>
              </WhiteSmallPhone>
              <Click
                top="275px"
                transform="translateX(78px)"
                animationData="click"
              />
            </>
          )}
          {isChecked === true && (
            <>
              <WhiteBigPhone>
                <BigPhoneImg src={bigImg} alt="큰글씨 모드"></BigPhoneImg>
              </WhiteBigPhone>
            </>
          )}
          <SelectBox
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            mainText={mainText}
          />
          <Shadow src={isChecked ? shadow : smallShadow} alt="" />
        </MainImageContainer>
      </Main>
      {isChecked === true && (
        <BottomButton backLocation="/economics" nextLocation="/" />
      )}
    </div>
  );
};

export default Intuition;
