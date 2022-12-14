// 훅
import { useEffect, useState } from "react";
// CSS
import styled, { keyframes } from "styled-components";
// 컴포넌트
import Header from "../components/Header";
import Title from "../components/Title";
import WhiteBox from "../components/WhiteBox";
import WhiteGradientBox from "../components/WhiteGradientBox";

import SelectBox from "../components/page6-intuition/SelectBox";
import BottomButton from "../components/BottomButton";
import CheckecdForward from "../components/page6-intuition/CheckedForward";
import CheckecdBackward from "../components/page6-intuition/CheckedBackward";
// 데이터
import { mockData } from "../data/mockData";

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

const Shadow = styled.img`
  width: 305px;
  height: 25px;
  position: absolute;
  top: 207px;
`;

const Intuition = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [mainText, setMainText] = useState("");
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
            <CheckecdForward
              isChecked={isChecked}
              setIsChecked={setIsChecked}
            />
          )}
          {isChecked === true && <CheckecdBackward />}
          <SelectBox isChecked={isChecked} mainText={mainText} />
          <Shadow
            src={
              isChecked
                ? process.env.PUBLIC_URL + "/img/intuition/shadow.png"
                : process.env.PUBLIC_URL + "/img/intuition/small-shadow.png"
            }
            alt=""
          />
        </MainImageContainer>
      </Main>
      {isChecked === true && (
        <BottomButton
          backLocation="/economics"
          nextLocation="/bank"
          next="시작하기 ＞"
        />
      )}
    </div>
  );
};

export default Intuition;
