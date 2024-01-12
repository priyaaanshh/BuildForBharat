import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Container/Header';
import Footer from './Container/Footer';
import Home from './Pages/Home/Home';
import SearchPage from './Pages/Search/Search';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* SearchPage route */}
          <Route path="/search" element={<SearchPage />} />

          {/* Add more routes as needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
