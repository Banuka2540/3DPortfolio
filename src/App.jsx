import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from "./components/loader";
import Nav from './components/Nav';
import Home from './Page/Home';
import About from './components/about';
import Technologies from './components/Technologies';
import Projects from './components/projects';
import Contact from './components/Contact';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <Router>
        <div
          className="min-h-screen bg-white text-black font-Poppins overflow-x-hidden relative"
          style={{
            opacity: isLoading ? 0 : 1,
            transform: isLoading ? "translateY(16px)" : "translateY(0px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          <Nav />

          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Technologies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;