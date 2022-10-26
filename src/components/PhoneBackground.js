import styled from 'styled-components';

const Phone = styled.div`
  width: 294px;
  height: 290px;
  background: linear-gradient(180deg, #e9ecef 0%, rgba(233, 236, 239, 0) 100%);
  border-radius: 36.75px 36.75px 0px 0px;
  margin: 36px auto;
`;

const PhoneBackground = () => {
  return <Phone />;
};

export default PhoneBackground;
