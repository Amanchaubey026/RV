import './App.css';
import MyNavbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VibeTherapyPortfolio from './pages/Portfolio';
import VibeTherapyTeam from './pages/Team';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<VibeTherapyPortfolio />} />
          <Route path="/team" element={<VibeTherapyTeam />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
