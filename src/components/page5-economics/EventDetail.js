// CSS
import styled from "styled-components";
// 이미지 및 애니메이션
import Lottie from "lottie-react";
import coin from "../../assets/lottie/coin.json";

const EventDetailWrapper = styled.div`
  box-sizing: border-box;

  position: absolute;
  display: flex;
  justify-content: center;

  top: 36px;
  left: 50%;
  transform: translateX(-50%);

  width: 312px;
  height: 296px;
  padding-top: 28px;

  background: #ffffff;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 0px 40px rgba(51, 53, 56, 0.09);
  border-radius: 36px 36px 0px 0px;
  div {
    overflow: hidden;
    div:nth-child(1) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 500px;
      z-index: 3;
    }
    img {
      width: 280px;
      transform: translateY(-50px);
    }
  }
`;
const options = {
  setSpeed: 10,
};

const EventDetail = () => {
  return (
    <>
      <EventDetailWrapper>
        <div>
          <Lottie animationData={coin} options={options} loop={false} />
          <img
            src={process.env.PUBLIC_URL + "/img/economics/event.png"}
            alt="적금 이벤트"
          />
        </div>
      </EventDetailWrapper>
    </>
  );
};

export default EventDetail;
