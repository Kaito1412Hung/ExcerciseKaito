import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/products">Product List</Link>
        </nav>

        <Routes>
          <Route path="/products" element={<ProductList />} /> 
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
