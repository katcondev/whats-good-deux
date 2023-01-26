import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './screens/Aboutus';
import Slide from './components/Slide'


const App = () => {
  return (
    <body>
      <Header />
      <Slide />
      <main>
      <About />
      </main>
    
      <Footer />
     
    </body>
  );
}

export default App;
