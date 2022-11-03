import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Close = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  /* padding: 10px; */
  text-decoration: none;
  color: #222222;
  cursor: pointer;
  padding: 10px;
  font-family: 'SpoqaHanSans';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #6e767e;
`;

const CloseContainer = styled.div`
  display: flex;
  margin-top: 8px;
  justify-content: end;
  margin-right: 7px;
`;

const CloseButton = () => {
  const navigate = useNavigate();
  return (
    <CloseContainer>
      <Close
        onClick={() => {
          navigate(-1);
        }}
      >
        건너뛰기
      </Close>
    </CloseContainer>
  );
};

export default CloseButton;
