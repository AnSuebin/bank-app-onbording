import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Typing = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 700;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: -0.02em;
`;

const TypingText = () => {
  const txt = '노후연금 추천해줘';
  const [isTypingTime, setIsTypingTime] = useState(false);
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTypingTime(true);
    }, 1600);
    return () => {
      clearTimeout(timeout);
    };
  }, [isTypingTime]);

  useEffect(() => {
    if (isTypingTime) {
      const interval = setInterval(() => {
        setText(Text + txt[Count]);
        setCount(Count + 1);
      }, 130);
      if (Count === txt.length) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  });

  return <>{isTypingTime === true && <Typing>{Text}</Typing>}</>;
};

export default TypingText;
