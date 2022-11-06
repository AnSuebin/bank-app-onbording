// 훅
import React from 'react';
// CSS
import styled from 'styled-components';

const SwitchButton = styled.span`
  content: '';
  position: absolute;
  left: 2px;

  width: 24px;
  height: 24px;
  border-radius: 45px;
  background: #888e98;
  box-shadow: 5px 5px 12px rgba(144, 145, 146, 0.2);

  transition: 0.2s;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 48px;
  height: 16px;
  background: #eff1f3;
  border-radius: 100px;

  transition: background-color 0.2s;
  cursor: pointer;
`;

const SwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${SwitchLabel} {
    background: #fae585;
    ${SwitchButton} {
      left: calc(100%);
      transform: translateX(-100%);
      background-color: #f5bf41;
    }
  }
`;

const ToggleButton = ({ onClick }) => {
  return (
    <>
      <SwitchCheckbox id={`switch-new`} type="checkbox" onChange={onClick} />
      <SwitchLabel htmlFor={`switch-new`}>
        <SwitchButton />
      </SwitchLabel>
    </>
  );
};

export default ToggleButton;
