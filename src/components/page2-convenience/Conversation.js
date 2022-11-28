// CSS
import styled, { keyframes } from "styled-components";

//-- 애니메이션 --//
const comeUp1 = keyframes`
  0%{
    transform: translateY(130px);
    opacity: 0;
  }
  33%{
    transform: translateY(92px);
    opacity: 1;
  }
  66%{
    transform: translateY(46px);
    opacity: 1;
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
`;

const comeUp2 = keyframes`
  0%{
    transform: translateY(130px);
    opacity: 0;
  }
  33%{
    transform: translateY(92px);
    opacity: 0;
  }
  66%{
    transform: translateY(46px);
    opacity: 1;
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
`;

const comeUp3 = keyframes`
  0%{
    transform: translateY(130px);
    opacity: 0;
  }
  33%{
    transform: translateY(92px);
    opacity: 0;
  }
  66%{
    transform: translateY(46px);
    opacity: 0;
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
`;

//-- 스타일 --//
const ConvenienceContainer = styled.div`
  position: absolute;
  top: 196px;
  left: 50%;
  transform: translate(-136px);
  height: 290px;
  z-index: 3;
`;

const Conversation1 = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  height: 38px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;
  font-family: "Medium";
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #222222;
  background: #f8d459;
  border-radius: 2px 20px 20px 20px;
  animation-delay: 0.8s;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-name: ${comeUp1};
  animation-fill-mode: backwards;
  z-index: 10;
`;

const Conversation2 = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  height: 38px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;
  font-family: "Medium";
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #222222;
  background: #f8d459;
  border-radius: 2px 20px 20px 20px;
  animation-delay: 0.8s;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-name: ${comeUp2};
  animation-fill-mode: backwards;
  z-index: 10;
`;

const Conversation3 = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  height: 38px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;
  font-family: "Medium";
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #222222;
  background: #f8d459;
  border-radius: 2px 20px 20px 20px;
  animation-delay: 0.8s;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-name: ${comeUp3};
  animation-fill-mode: backwards;
  z-index: 10;
`;

const Conversation = () => {
  return (
    <>
      <ConvenienceContainer>
        <Conversation1 width="147px">안녕하세요, 고객님</Conversation1>
        <Conversation2 width="157px">상담원 김리브입니다</Conversation2>
        <Conversation3 width="198px">회원가입 도와드리겠습니다</Conversation3>
      </ConvenienceContainer>
    </>
  );
};

export default Conversation;
