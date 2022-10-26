import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';

const Professionalism = () => {
  return (
    <div>
      <Header fouthLindColor="#F8D459" />
      <Title subTitle={'맞춤형 금융 비서'} mainTitle={'똑똑하게 관리하세요'} />
      <PhoneBackground />
      <BottomButton backLocation="/accessibility" nextLocation="/economics" />
    </div>
  );
};

export default Professionalism;
