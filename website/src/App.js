

import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Aboutus from './pages/Aboutus';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Navbar />
        <div className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/checkout" className="nav-link">
                Checkout
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
