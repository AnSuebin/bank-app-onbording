// CSS
import styled from 'styled-components';
// 이미지
import bank from '../utils/bank.png';

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  height: 100vh;
  width: 100vw;
  img {
    width: 80vw;
    margin-bottom: 27px;
  }
`;

const Bank = () => {
  return (
    <MainPage>
      <img src={bank}></img>
    </MainPage>
  );
};

export default Bank;
