import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./screens/Home";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={About} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
