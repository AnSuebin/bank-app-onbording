import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';

const Intuition = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 6);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
  }, []);

  return (
    <div>
      <Header sixthLineColor="#F8D459" />
      <Title subTitle={title} mainTitle={subtitle} />
      <PhoneBackground />
      <BottomButton backLocation="/economics" nextLocation="/" />
    </div>
  );
};

export default Intuition;
