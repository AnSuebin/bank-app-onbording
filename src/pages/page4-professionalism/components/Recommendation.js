// CSS
import styled from 'styled-components';
// 이미지
import figure from '../../../utils/professionalism/figure.png';

const InfoBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  left: 50%;
  transform: translateX(-50%);

  z-index: 1;
  h5 {
    margin-top: 65.01px;
    width: 200px;
    font-family: 'Regular';
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #343434;
  }
  img {
    margin-top: 30px;
    width: 96px;
    height: 50px;
  }
  h3 {
    padding-top: 11.88px;
    font-family: 'Regular';
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #343434;
  }
  p {
    padding-top: 7px;
    font-family: 'Regular';
    font-size: 13px;
    line-height: 19px;
    color: #6f787c;
  }
`;

const Recommendation = ({ mainText }) => {
  return (
    <>
      <InfoBox>
        <h5>{mainText.subTitle}</h5>
        <img src={figure} alt="수치" />
        <h3>{mainText.title}</h3>
        <p>{mainText.text}</p>
      </InfoBox>
    </>
  );
};

export default Recommendation;
