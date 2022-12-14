// CSS
import styled from "styled-components";

const DeleteContainer = styled.div`
  box-sizing: border-box;

  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 204px;
  left: 50%;
  transform: translateX(-50%);

  width: 268px;
  height: 80px;
  padding: 20px;

  border-radius: 14px;
  background: #ffffff;
  border: 2.5px solid #ffc544;
  box-shadow: 5.06896px 5.06896px 12.6724px rgba(144, 145, 146, 0.2);

  z-index: 1;
  button {
    width: 56px;
    height: 32px;
    background: #ffc544;
    color: #222222;
    border: none;
    border-radius: 4px;

    font-family: "Medium";
    font-size: 13px;
    line-height: 16px;
  }
`;

const BankContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
  }
`;

const BankName = styled.div`
  position: relative;
  margin-left: 8px;
  div {
    display: flex;
    h5 {
      font-family: "Medium";
      font-size: 15px;
      line-height: 19px;
      letter-spacing: -0.02em;
      color: #222222;
      text-align: center;
    }
    img {
      margin-top: 1px;
      margin-left: 3px;
      width: 14px;
      height: 14px;
    }
  }

  p {
    margin-top: 2px;
    font-family: "Medium";
    font-size: 11px;
    line-height: 14px;
    letter-spacing: -0.02em;
    color: #6f787c;
  }
`;

const DeleteBox = ({ setIsClick }) => {
  return (
    <>
      <DeleteContainer>
        <BankContainer>
          <img
            src={process.env.PUBLIC_URL + "/img/safety/bank-icon.png"}
            alt="kb 국민은행 app 아이콘"
          />
          <BankName>
            <div>
              <h5>KB 국민은행</h5>
              <img
                src={process.env.PUBLIC_URL + "/img/safety/alarm.png"}
                alt="경고"
              ></img>
            </div>
            <p>IP:Rag26w_sh4</p>
          </BankName>
        </BankContainer>
        <button
          onClick={() => {
            setIsClick(true);
          }}
        >
          삭제
        </button>
      </DeleteContainer>
    </>
  );
};

export default DeleteBox;
