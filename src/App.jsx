import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import StayAndDiscover from '../pages/StayAndDiscover';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import StyleGuide from '../pages/StyleGuide';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stay-and-discover" element={<StayAndDiscover />} />
        <Route path="/features" element={<Navigate to="/stay-and-discover" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/styleguide" element={<StyleGuide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
