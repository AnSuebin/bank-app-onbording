// CSS
import styled from 'styled-components';

const TextContainer = styled.div`
  position: absolute;
  text-align: center;
  margin-top: 60px;
  div {
    margin-bottom: 13px;
    font-family: 'Regular';
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #7d868f;
  }
`;

const Text = ({ textList }) => {
  return (
    <>
      <TextContainer>
        {textList.map((text) => (
          <div>{text}</div>
        ))}
      </TextContainer>
    </>
  );
};

export default Text;
