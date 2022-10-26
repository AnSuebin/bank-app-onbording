import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';

const Economics = () => {
  return (
    <div>
      <Header fifthLineColor="#F8D459" />
      <Title subTitle={'금융 혜택 알림'} mainTitle={'알뜰하게 챙겨드려요'} />
      <PhoneBackground />
      <BottomButton backLocation="/professionalism" nextLocation="/intuition" />
    </div>
  );
};

export default Economics;
