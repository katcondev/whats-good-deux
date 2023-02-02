import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./screens/Home";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='*' element={<Navigate replace to='/' />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
