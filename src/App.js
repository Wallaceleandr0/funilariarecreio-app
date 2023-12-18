import './App.css';
import RoutesNavbar from './components/Navbar/RoutesNavbar.js';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
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
