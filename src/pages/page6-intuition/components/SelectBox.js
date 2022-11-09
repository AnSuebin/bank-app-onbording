// CSS
import styled from 'styled-components';
// 컴포넌트
import ToggleButton from './ToggleButton';

const ToggleButtonbox = styled.div`
  box-sizing: border-box;

  position: absolute;
  top: 229px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 312px;
  height: 59px;
  padding-left: 26px;
  padding-right: 26px;
  background: #ffffff;
  box-shadow: 0px 5.03756px 21.4096px rgba(0, 0, 0, 0.2);
  border-radius: 12.6793px;
  z-index: 3;
  div {
    margin-top: 3px;
    font-family: 'Regular';
    font-size: 17px;
    line-height: 23px;
    letter-spacing: -0.02em;
    color: #424242;
  }
`;

const SelectBox = ({ isChecked, mainText }) => {
  return (
    <>
      <ToggleButtonbox>
        <div>{mainText}</div>
        <ToggleButton isChecked={isChecked} />
      </ToggleButtonbox>
    </>
  );
};

export default SelectBox;
