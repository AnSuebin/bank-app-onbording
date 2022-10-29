import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';
import mainVideo from '../utils/convenience/main-video.mov';
import subVideo from '../utils/convenience/sub-video.mov';
import styled from 'styled-components';

const MainVideo = styled.video`
  width: 294px;
  height: 290px;
`;

const Convenience = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 2);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
  }, []);
  return (
    <div>
      <Header firstLineColor="#F8D459" secondLineColor="#F8D459" />
      <Title subTitle={title} mainTitle={subtitle} />
      <PhoneBackground />
      <MainVideo src={mainVideo} loop autoPlay muted />
      <BottomButton backLocation="/safety" nextLocation="/accessibility" />
    </div>
  );
};

export default Convenience;
