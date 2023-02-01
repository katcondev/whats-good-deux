import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import Slide from '../components/Slide';
import Product from '../components/Product'
import products from '../products'



const Aboutus = () => {
  return (
    <Container id='about'>
    <Slide />
    <div className='container-fluid'>
    <h4>Latest Products</h4>
    <Row>
      {products.map(product => (
        <Col sm={12} md={6} lg={4} xl={3} >
            <Product product={product} />
        </Col>
      ))}
    </Row>
    </div>
    

    </Container>
  )
}

export default Aboutus
