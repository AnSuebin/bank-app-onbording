// CSS
import styled from 'styled-components';

const WhitePhone = styled.div`
  position: absolute;

  top: 32px;
  left: 50%;
  transform: translateX(-50%);

  width: 312px;
  height: 296px;

  background: #ffffff;
  border: 1px solid #e6e7ea;
  box-shadow: 0px 0px 40px rgba(51, 53, 56, 0.09);
  border-radius: 36px 36px 0px 0px;
`;

const WhitePhoneBackground = () => {
  return (
    <>
      <WhitePhone></WhitePhone>
    </>
  );
};

export default WhitePhoneBackground;
