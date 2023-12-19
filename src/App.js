import './App.css';
import RoutesNavbar from './components/Navbar/RoutesNavbar.js';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect } from 'react';

function App() {

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', handleScrollToTop);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <RoutesNavbar />
      </Router>
      <footer>© Recreio Auto Services. Todos os direitos reservados.</footer>
    </div>
  );
}

export default App;
