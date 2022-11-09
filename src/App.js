import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Safety from './pages/page1-safety/Safety';
import Convenience from './pages/page2-convenience/Convenience';
import Accessibility from './pages/page3-accessibility/Accessibility';
import Professionalism from './pages/page4-professionalism/Professionalism';
import Economics from './pages/page5-economics/Economics';
import Intuition from './pages/page6-intuition/Intuition';
import Bank from './pages/Bank';

function App() {
  return (
    <BrowserRouter basename="bank-app-onbording">
      <Routes>
        <Route path="/" element={<Safety />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/convenience" element={<Convenience />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/professionalism" element={<Professionalism />} />
        <Route path="/economics" element={<Economics />} />
        <Route path="/intuition" element={<Intuition />} />
        <Route path="/bank" element={<Bank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
