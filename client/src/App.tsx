import './App.css';
import MyNavbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VibeTherapyPortfolio from './pages/Portfolio';
import VibeTherapyTeam from './pages/Team';
import Home from './pages/Home';
import Footer from './components/footer';
import ContactUs from './pages/Contact';

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<VibeTherapyPortfolio />} />
          <Route path="/team" element={<VibeTherapyTeam />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
