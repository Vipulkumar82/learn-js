import './App.css'
import Counter from './components/Counter'
import ThemeChanger from './components/ThemeChanger'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  return (
    <div>
      <h2>Welcome to Redux Advanced App</h2>
      <p>Select a feature from the navbar.</p>
    </div>
  )
}

function App() {
  // Get theme from Redux
  const theme = useSelector((state) => state.theme.value);
  return (
    <div className={theme === 'white' ? 'app-root light' : 'app-root dark'}>
      <Router>
        <nav className="navbar">
          <span className="nav-title">Redux Advanced App</span>
          <ul className="nav-links">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/counter" className="nav-link">Counter</Link>
            </li>
            <li>
              <Link to="/themechanger" className="nav-link">ThemeChanger</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/themechanger" element={<ThemeChanger />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
