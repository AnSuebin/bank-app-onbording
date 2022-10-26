import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';

const Safety = () => {
  return (
    <div>
      <Header firstLineColor="#F8D459" />
      <Title subTitle={'금융 사기 감지'} mainTitle={'안심하고 거래하세요'} />
      <PhoneBackground />
      <BottomButton backLocation="/" nextLocation="/convenience" />
    </div>
  );
};

export default Safety;
