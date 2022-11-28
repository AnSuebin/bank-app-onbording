// CSS
import styled from "styled-components";
// 이미지
// import logo from '../../../utils/economics/logo-icon.png';
// import menu from '../../../utils/economics/menu-icon.png';

const SmallPhone = styled.div`
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);

  width: 272px;
  height: 304px;
  background: linear-gradient(
    180deg,
    #e9ecef 74.01%,
    rgba(233, 236, 239, 0) 100%
  );
  border-radius: 36px 36px 0px 0px;
  z-index: 1;
`;

const PhoneHeader = styled.div`
  box-sizing: border-box;

  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;

  width: 272px;
  height: 290px;
  padding: 18px 28px 0px 19px;
  z-index: 2;
`;

const LogoImg = styled.img`
  width: 104px;
  height: 22px;
  z-index: -1;
`;

const MenuImg = styled.img`
  width: 18px;
  height: 18px;
  z-index: -1;
`;

const SmallPhoneBackground = () => {
  return (
    <>
      <SmallPhone></SmallPhone>
      <PhoneHeader>
        <LogoImg
          src={process.env.PUBLIC_URL + "/img/economics/logo-icon.png"}
          alt="국민은행 로고"
        />
        <MenuImg
          src={process.env.PUBLIC_URL + "/img/economics/menu-icon.png"}
          alt="메뉴"
        />
      </PhoneHeader>
    </>
  );
};

export default SmallPhoneBackground;
