import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './screens/Aboutus';
import Reviews from './screens/Reviews';
import Cart from './screens/Cart'
import Login from './screens/Login'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/about' element={<About />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      
      </main>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
