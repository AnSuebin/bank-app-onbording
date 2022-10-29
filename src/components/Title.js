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
  font-family: 'Spoqa Han Sans Neo';
  color: #1355b4;
  font-size: 18px;
  font-weight: 400;
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const MainTitle = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  margin-top: 14px;
  color: #222222;
  font-size: 26px;
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
