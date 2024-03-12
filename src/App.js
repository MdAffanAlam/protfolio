import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects/>}/>
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
