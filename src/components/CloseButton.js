// 훅
import { useNavigate } from 'react-router-dom';
// CSS
import styled from 'styled-components';

const Close = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;

  font-family: 'Regular';
  font-size: 13px;
  color: #6e767e;
  text-decoration: none;
  cursor: pointer;
`;

const CloseButton = () => {
  const navigate = useNavigate();
  return (
    <Close
      onClick={() => {
        navigate('/safety');
      }}
    >
      건너뛰기
    </Close>
  );
};

export default CloseButton;
