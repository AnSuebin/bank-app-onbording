// CSS
import styled, { keyframes } from "styled-components";
// 이미지
// import point from '../../../utils/economics/point-img.png';

//-- 애니메이션 --//
const fadeInbutton = keyframes`
from {
  opacity: 0.5;
  transform: translate(-50%, 50px);
}
to {
  opacity: 1;
  transform: translate(-50%,0);
}
`;

//-- 스타일 --//
const Event = styled.div`
  box-sizing: border-box;

  position: absolute;
  top: 85px;
  left: 50%;
  transform: translateX(-50%);

  width: 312px;
  height: 231px;
  padding-top: 32px;
  background: #fdf1d7;
  border: 2px solid #ffc544;
  border-radius: 14px;

  animation-delay: 0.25s;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeInbutton};
  animation-fill-mode: backwards;

  z-index: 3;
  p {
    margin-left: 32px;
    font-family: "Medium";
    font-size: 15px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  h2 {
    margin-top: 12px;
    margin-left: 32px;
    width: 106px;

    font-family: "Medium";
    font-size: 21px;
    letter-spacing: -0.02em;
    color: #222222;
    line-height: 32px;
    span {
      font-weight: 700;
    }
  }
  img {
    position: absolute;
    top: 56px;
    right: 32px;
    width: 125px;
    height: 83px;
  }
  button {
    margin-top: 21px;
    margin-left: 22px;

    width: 268px;
    height: 56px;
    background: #ffc544;
    border: 2.5px solid #ffc544;
    box-shadow: 5.06896px 5.06896px 12.6724px rgba(144, 145, 146, 0.2);
    border-radius: 14px;

    font-family: "Medium";
    font-size: 17px;
    line-height: 22px;
    letter-spacing: -0.02em;
    color: #343434;

    cursor: pointer;
  }
`;

const EventBox = ({ mainText, onClick }) => {
  return (
    <>
      <Event>
        <p>{mainText.subTitle}</p>
        <h2>
          <span>{mainText.title1}</span>
          {mainText.title2}
        </h2>
        <img
          src={process.env.PUBLIC_URL + "/img/economics/point-img.png"}
          alt="클릭"
        ></img>
        <button onClick={onClick}>이벤트 확인해보기</button>
      </Event>
    </>
  );
};

export default EventBox;
