
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Contact />
    </div>
    </Router>
  );
}

export default App;
