import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Safety from './pages/Satety';
import Convenience from './pages/Convenience';
import Accessibility from './pages/Accessibility';
import Professionalism from './pages/Professionalism';
import Economics from './pages/Economics';
import Intuition from './pages/Intuition';

function App() {
  return (
    <BrowserRouter basename="bank-app-onbording">
      <Routes>
        <Route path="/safety" element={<Safety />} />
        <Route path="/convenience" element={<Convenience />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/professionalism" element={<Professionalism />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/intuition" element={<Intuition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
