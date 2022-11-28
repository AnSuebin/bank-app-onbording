// CSS
import styled from "styled-components";

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
      <img
        src={process.env.PUBLIC_URL + "/img/bank.png"}
        alt="국민 은행 앱"
      ></img>
    </MainPage>
  );
};

export default Bank;
