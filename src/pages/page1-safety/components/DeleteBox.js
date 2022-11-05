// 훅
import styled from 'styled-components';
// 이미지
import bankIcon from '../../../utils/safety/bank-icon.png';

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

    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
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
  h5 {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #222222;
    span {
      position: absolute;
      margin-left: 10.5px;
      font-family: 'Spoqa Han Sans Neo';
      font-weight: 500;
      font-size: 11px;
      color: #f43e3e;
    }
    div {
      position: absolute;
      width: 14px;
      height: 14px;
      border: 1px solid #f43e3e;
      display: inline-block;
      border-radius: 50%;
      transform: translate(4px, 0.5px);
    }
  }
  p {
    font-family: 'Spoqa Han Sans Neo';
    font-weight: 500;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: -0.02em;

    color: #8f989c;
  }
`;

const DeleteBox = ({ setIsClick }) => {
  return (
    <>
      <DeleteContainer>
        <BankContainer>
          <img src={bankIcon} alt="kb 국민은행 app 아이콘" />
          <BankName>
            <h5>
              KB 국민은행<span>!</span>
              <div></div>
            </h5>
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
