// CSS
import styled from "styled-components";
// 컴포넌트
import Click from "../Click";

const WhiteSmallPhone = styled.div`
  display: flex;
  justify-content: center;

  top: 32px;
  width: 272px;
  height: 296px;
  background: #ffffff;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 0px 40px rgba(51, 53, 56, 0.09);
  border-radius: 36px 36px 0px 0px;
`;

const SmallPhoneImg = styled.img`
  margin-top: 16px;
  width: 232px;
  height: 246px;
  border-radius: 36px 36px 0px 0px;
`;

const CheckecdForward = ({ isChecked, setIsChecked }) => {
  return (
    <>
      <WhiteSmallPhone>
        <SmallPhoneImg
          src={process.env.PUBLIC_URL + "/img/intuition/small-img.png"}
          alt="기본 모드"
        ></SmallPhoneImg>
      </WhiteSmallPhone>
      <Click
        top="188px"
        transform="translateX(-15px)"
        animationData="click"
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      />
    </>
  );
};

export default CheckecdForward;
