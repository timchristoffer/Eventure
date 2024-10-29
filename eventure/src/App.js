import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hostpage from './pages/Hostpage/Hostpage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Eventpage from './pages/Eventpage/Eventpage';
import Homepage from './pages/Homepage/Homepage';
import Searchpage from './pages/Searchpage/Searchpage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AllHostspage from './pages/AllHostspage/AllHostspage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/host/:documentId" element={<Hostpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/hosts" element={<AllHostspage />} />
          <Route path="/event/:documentId" element={<Eventpage />} />
          <Route path="/search" element={<Searchpage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;