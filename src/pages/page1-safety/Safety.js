// 훅
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
// 컴포넌트
import Header from '../../components/Header';
import Title from '../../components/Title';
import WarningBox from './components/WarningBox';
import DeleteBox from './components/DeleteBox';
import Click from '../../components/Click';
import Success from './components/Success';
import PhoneBackground from '../../components/PhoneBackground';
import BottomButton from '../../components/BottomButton';
// 데이터
import { mockData } from '../../data/mockData';

//-- 애니메이션 --//
const fadeIn = keyframes`
from {
  opacity: 0;
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
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const Safety = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');
  const [text, setText] = useState('');
  const [successText, setSuccessText] = useState('');
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 1);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
    setText(pageData.text);
    setSuccessText(pageData.success);
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
              <WarningBox text={text} />
              <DeleteBox setIsClick={setIsClick} />
              <Click
                animationData="click"
                loop="true"
                onClick={() => {
                  setIsClick(true);
                }}
              />
            </>
          )}
          {/* 클릭 후 */}
          {isClick === true && <Success successText={successText} />}
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
