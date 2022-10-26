import BottomButton from '../components/BottomButton';
import Title from '../components/Title';
import Header from '../components/Header';
import PhoneBackground from '../components/PhoneBackground';

const Accessibility = () => {
  return (
    <div>
      <Header thirdLineColor="#F8D459" />
      <Title subTitle={'말하는 상담원'} mainTitle={'필요할 때 찾아주세요'} />
      <PhoneBackground />
      <BottomButton
        backLocation="/convenience"
        nextLocation="/professionalism"
      />
    </div>
  );
};

export default Accessibility;
