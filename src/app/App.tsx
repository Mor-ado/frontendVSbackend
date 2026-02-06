import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OverviewPage from './components/OverviewPage';
import DetailedPage from './components/DetailedPage';
import FullStackPage from './components/FullStackPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/detailed" element={<DetailedPage />} />
        <Route path="/fullstack" element={<FullStackPage />} />
      </Routes>
    </Router>
  );
}