import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticleComponent from './components/Particle';

function App() {
  return (
    <>
      <Router>
        <ParticleComponent />
        <div className="content"> {/* Wrapper for your content */}
          <NavBar />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
