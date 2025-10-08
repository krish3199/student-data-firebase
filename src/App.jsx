import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Product';
import Singup from './Singup';
import Admin from './Admin'
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Singup />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
