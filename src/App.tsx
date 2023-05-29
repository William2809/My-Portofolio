import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <div>
      <Router>
        <AppLayout>
          <Routes>
            <Route path='/' element={<Home />} /> 

          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
