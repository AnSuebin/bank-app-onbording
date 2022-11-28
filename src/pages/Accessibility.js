//훅
import { useEffect, useState } from "react";
// CSS
import styled, { keyframes } from "styled-components";
// 컴포넌트
import BottomButton from "../components/BottomButton";
import Title from "../components/Title";
import Header from "../components/Header";

import PageTurnOverForword from "../components/page3-accessibility/PageTurnOverForword";
import PageTurnOverBackword from "../components/page3-accessibility/PageTurnOverBackword";
//데이터
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
  position: relative;
  display: flex;
  justify-content: center;

  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const Accessibility = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [textList, setTextList] = useState([]);
  const [isTimeout, setIsTimeout] = useState(false);
  const [PageTurnOver, setPageTurnOver] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 3);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
    setTextList(pageData.text);
  }, []);

  // 타이핑 타이밍 세팅
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTimeout(true);
    }, 2750);
    return () => {
      clearTimeout(timeout);
    };
  }, [isTimeout]);

  // 화면 전환 타이밍 세팅
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageTurnOver(true);
    }, 8650);
    return () => {
      clearTimeout(timeout);
    };
  }, [PageTurnOver]);

  return (
    <div>
      <Header
        firstLineColor="#F8D459"
        secondLineColor="#F8D459"
        thirdLineColor="#F8D459"
      />
      <Main>
        <Title subTitle={title} mainTitle={subtitle} />
        <MainImageContainer>
          {/* 페이지 전환 전 */}
          {PageTurnOver === false && (
            <PageTurnOverForword textList={textList} isTimeout={isTimeout} />
          )}
          {/* 페이지 전환 후 */}
          {PageTurnOver === true && <PageTurnOverBackword />}
        </MainImageContainer>
      </Main>
      {PageTurnOver === true && (
        <BottomButton
          backLocation="/convenience"
          nextLocation="/professionalism"
        />
      )}
    </div>
  );
};

export default Accessibility;
