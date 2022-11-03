import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const ReactSwitchButton = styled.span`
  content: '';
  position: absolute;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 45px;
  transition: 0.2s;
  background: #888e98;
  box-shadow: 5px 5px 12px rgba(144, 145, 146, 0.2);
`;
const ReactSwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 48px;
  height: 16px;
  background: #eff1f3;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  cursor: pointer;
  &:active ${ReactSwitchButton} {
    width: 40px;
  }
`;

const ReactSwitchCheckbox = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  &:checked + ${ReactSwitchLabel} {
    background: #fae585;
    ${ReactSwitchButton} {
      left: calc(100%);
      transform: translateX(-100%);
      background-color: #f5bf41;
    }
  }
`;

const ToggleButton = ({ onChange }) => {
  //   const [value, setValue] = useState(false);
  return (
    <>
      <ReactSwitchCheckbox
        id={`react-switch-new`}
        type="checkbox"
        // checked={value}
        onChange={onChange}
      />
      <ReactSwitchLabel htmlFor={`react-switch-new`}>
        <ReactSwitchButton />
      </ReactSwitchLabel>
    </>
  );
};

export default ToggleButton;
