// 훅
import styled, { keyframes } from 'styled-components';

//-- 애니메이션 --//
const comeUp = keyframes`
  0%{
    transform: translateY(130px);
  }
  20%{
    transform: translateY(130px);
  }
  40%{
    transform: translateY(92px);
  }
  80%{
    transform: translateY(46px);
  }
  100%{
    transform: translateY(0px);
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

const Conversations = styled.div`
  display: flex;
  align-items: center;

  width: ${(props) => props.width};
  height: 38px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 8px;

  font-family: 'Spoqa Han Sans Neo';
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #222222;
  background: #f8d459;
  border-radius: 2px 20px 20px 20px;

  animation-delay: 0.8s;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-name: ${comeUp};
  animation-fill-mode: backwards;

  z-index: 10;
`;

const Conversation = ({ conversations }) => {
  return (
    <>
      <ConvenienceContainer>
        {conversations.map((conversation) => (
          <Conversations width={`${conversation.length * 11.5}px`}>
            {conversation}
          </Conversations>
        ))}
      </ConvenienceContainer>
    </>
  );
};

export default Conversation;
