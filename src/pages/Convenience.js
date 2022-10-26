import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';

const Convenience = () => {
  return (
    <div>
      <Header secondLineColor="#F8D459" />
      <Title subTitle={'영상통화로 회원가입'} mainTitle={'편하게 시작하세요'} />
      <PhoneBackground />
      <BottomButton backLocation="/safety" nextLocation="/accessibility" />
    </div>
  );
};

export default Convenience;
