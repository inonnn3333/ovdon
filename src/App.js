import React from 'react';
import HomePage from './components/Homepage';  
import Daniel from './components/Daniel';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/daniel" element={<Daniel />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
