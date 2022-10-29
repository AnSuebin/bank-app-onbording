import styled from 'styled-components';

import CloseButton from './CloseButton';
import NavigationBar from './NavigationBar';

const HeaderContainer = styled.div`
  margin: 18px 20px 42px 20px;
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
      <CloseButton />
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
