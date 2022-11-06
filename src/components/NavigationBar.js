// CSS
import styled from 'styled-components';

const LineContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 320px;
  margin: 0 auto;
`;

const SeperateLine = styled.div`
  width: 52px;
  height: 4px;
  background-color: ${(props) => props.backgroundColor || 'EFF1F3'};
`;

function NavigationBar({
  firstLineColor,
  secondLineColor,
  thirdLineColor,
  fouthLindColor,
  fifthLineColor,
  sixthLineColor,
}) {
  return (
    <LineContainer>
      <SeperateLine backgroundColor={firstLineColor} />
      <SeperateLine backgroundColor={secondLineColor} />
      <SeperateLine backgroundColor={thirdLineColor} />
      <SeperateLine backgroundColor={fouthLindColor} />
      <SeperateLine backgroundColor={fifthLineColor} />
      <SeperateLine backgroundColor={sixthLineColor} />
    </LineContainer>
  );
}

export default NavigationBar;
