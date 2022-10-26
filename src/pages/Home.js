import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate('/safety')}>safety</button>
      <button onClick={() => navigate('/convenience')}>convenience</button>
      <button onClick={() => navigate('/accessibility')}>accessibility</button>
      <button onClick={() => navigate('/professionalism')}>
        professionalism
      </button>
      <button onClick={() => navigate('/Economics')}>Economics</button>
      <button onClick={() => navigate('/intuition')}>intuition</button>
    </div>
  );
};

export default Home;
