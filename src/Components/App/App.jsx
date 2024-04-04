import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ViewDocumentsPage from '../ViewDocumentsPage/ViewDocumentsPage';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |  
        <Link to="/ViewDocuments">View Documents</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ViewDocuments" element={<ViewDocumentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
