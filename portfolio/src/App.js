import appStyles from './styles/App.module.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import Projects from './Components/projects';
import About from './Components/about';
import Contact from './Components/contact';

function App() {
  return (
    <Router>
    <div className={appStyles.mainDiv}>
      <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/projects' element={<Projects />}/>
        <Route path = '/about' element={<About />}/>
        <Route path = '/contact' element={<Contact />}/>       
      </Routes>
    </div>
    </Router>
  );
}

export default App;
