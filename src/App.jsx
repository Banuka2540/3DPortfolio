import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './Page/Home'; 
import About from './components/about';
import Technologies from './components/Technologies';
import Projects from './components/projects'; // Ensure this matches your filename exactly
import Contact from './components/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black font-Poppins overflow-x-hidden relative">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/skills" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}