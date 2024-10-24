import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hostpage from './pages/Hostpage/Hostpage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Eventpage from './pages/Eventpage/Eventpage';
import Homepage from './pages/Homepage/Homepage';
import Searchpage from './pages/Searchpage/Searchpage';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeToggle />
        <header className="App-header">
        </header>
        <Routes>
          <Route path="/host" element={<Hostpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/event" element={<Eventpage />} />
          <Route path="/search" element={<Searchpage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;