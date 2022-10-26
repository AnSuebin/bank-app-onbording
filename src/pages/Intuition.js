import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';

const Intuition = () => {
  return (
    <div>
      <Header sixthLineColor="#F8D459" />
      <Title subTitle={'큰글씨 화면'} mainTitle={'편하게 보세요'} />
      <PhoneBackground />
      <BottomButton backLocation="/economics" nextLocation="/" />
    </div>
  );
};

export default Intuition;
