// 훅
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 245px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;

  width: 268px;
  height: 56px;
  padding: 17px 20px 17px 20px;

  border-radius: 14px;
  background: #ffd547;
  border: 1px solid #ffcf2b;
  box-shadow: 0px 8px 11px rgba(84, 76, 49, 0.1);
  border-radius: 9px;

  font-family: 'Regular';
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #343434;

  cursor: pointer;
`;

const SubmitButton = ({ onClick }) => {
  return (
    <>
      <Button onClick={onClick}>제안받기</Button>
    </>
  );
};

export default SubmitButton;
