import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';
import { mockData } from '../data/mockData';
import { useEffect, useState } from 'react';

const Economics = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubTitle] = useState('');

  useEffect(() => {
    const [pageData] = mockData.filter((page) => page.id === 5);
    setTitle(pageData.title);
    setSubTitle(pageData.subTitle);
  }, []);
  return (
    <div>
      <Header
        firstLineColor="#F8D459"
        secondLineColor="#F8D459"
        thirdLineColor="#F8D459"
        fouthLindColor="#F8D459"
        fifthLineColor="#F8D459"
      />
      <Title subTitle={title} mainTitle={subtitle} />
      <PhoneBackground />
      <BottomButton backLocation="/professionalism" nextLocation="/intuition" />
    </div>
  );
};

export default Economics;
