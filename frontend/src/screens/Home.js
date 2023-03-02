import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "../components/Slide";
import Product from "../components/Product";
import axios from "axios";

const Aboutus = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Slide />
      <Container id='about'>
        <div className='mx-auto py-3 container'>
          <h3 className='pt-3'>Popular Drinks</h3>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Aboutus;
