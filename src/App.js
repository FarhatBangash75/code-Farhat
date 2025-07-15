
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';  // ✅ FIX: use Routes
import React from 'react';
import Home from './Components/Home';
import Service from './Components/Service';
import Blog from './Components/Blog';
import Contacts from './Components/Contacts';
import About from './Components/About'

function App() {
  return (
    <div className="App">
 <Header />

      {/* ✅ Wrap Route components inside <Routes> instead of <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
             
      </Routes>
    </div>
  );
}

export default App;
