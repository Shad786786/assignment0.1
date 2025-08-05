import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Login from "./login"
import InternDashboard from './dashboard.jsx';
import Leadboard from './leadboard.jsx';
import ScrollToTop from './scrolltop.jsx';

function App() {
  return (
    <> <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/dashboard" element={<InternDashboard />} />
        <Route path="/leadboard" element={<Leadboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
