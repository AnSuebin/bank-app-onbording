import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
from {
  opacity: 0;
  transform: translateY(-30px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;

const SubTitle = styled.div`
  font-family: 'Medium';
  color: #1355b4;
  font-weight: 500;
  font-size: 19px;
  line-height: 24px;
  animation-duration: 0.55s;
  animation-delay: 0.5s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: backwards;
`;

const MainTitle = styled.div`
  font-family: 'Bold';
  font-style: normal;
  margin-top: 8px;
  color: #222222;
  font-weight: 700;
  font-size: 26px;
  line-height: 36px;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const TitleCotainer = styled.div`
  text-align: center;
`;

const Title = ({ subTitle, mainTitle }) => {
  return (
    <TitleCotainer>
      <SubTitle>{subTitle}</SubTitle>
      <MainTitle>{mainTitle}</MainTitle>
    </TitleCotainer>
  );
};

export default Title;
