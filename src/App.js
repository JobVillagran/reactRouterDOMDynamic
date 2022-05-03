import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
              <li><Link to="/about">Acerca de Nosotros</Link></li>
              <li><Link to="/profile">Perfil</Link></li>
            </ul>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:name" element={<Profile />} /> {/*Esta es la diferencia para hacerlo dinamico: Cuando le agregamos a "/:name" */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;