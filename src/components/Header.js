// CSS
import styled from 'styled-components';
// 컴포넌트
import CloseButton from './CloseButton';
import NavigationBar from './NavigationBar';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 20px;
`;

const CloseButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 8px;
  width: 320px;
`;

const Header = ({
  firstLineColor,
  secondLineColor,
  thirdLineColor,
  fouthLindColor,
  fifthLineColor,
  sixthLineColor,
}) => {
  return (
    <HeaderContainer>
      <NavigationBar
        firstLineColor={firstLineColor}
        secondLineColor={secondLineColor}
        thirdLineColor={thirdLineColor}
        fouthLindColor={fouthLindColor}
        fifthLineColor={fifthLineColor}
        sixthLineColor={sixthLineColor}
      />
      <CloseButtonContainer>
        <CloseButton />
      </CloseButtonContainer>
    </HeaderContainer>
  );
};

NavigationBar.defaultProps = {
  firstLineColor: '#EFF1F3',
  secondLineColor: '#EFF1F3',
  thirdLineColor: '#EFF1F3',
  fouthLindColor: '#EFF1F3',
  fifthLineColor: '#EFF1F3',
  sixthLineColor: '#EFF1F3',
};

export default Header;
