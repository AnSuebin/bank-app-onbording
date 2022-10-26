import styled from 'styled-components';

const SubTitle = styled.div`
  color: #1355b4;
  font-size: 18px;
  font-weight: 400;
`;

const MainTitle = styled.div`
  margin-top: 14px;
  color: #222222;
  font-size: 26px;
  font-weight: 700;
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
