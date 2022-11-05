// 훅
import styled from 'styled-components';
// 이미지
import WaringIcon from '../../../utils/safety/warning-icon.png';

const Warning = styled.div`
  box-sizing: border-box;

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 56px;
  left: 50%;
  transform: translateX(-50%);

  width: 268px;
  height: 136px;
  padding: 17px 20px;

  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 5px 5px 12px rgba(144, 145, 146, 0.2);

  z-index: 1;
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
`;

const WarningBox = ({ text }) => {
  return (
    <>
      <Warning>
        <img src={WaringIcon} alt="악성앱 탐지 아이콘" />
        <p>{text}</p>
      </Warning>
    </>
  );
};

export default WarningBox;
