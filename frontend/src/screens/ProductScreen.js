import React from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import productsData from "../products";

const ProductScreen = () => {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);
  return (
    <div id='prodW'>
      <Button className='py-4 my-3' href='/'>
        Go Back
      </Button>
      <Row className='py-4'>
        <Col lg={5}>
          <Image
            key={thisProduct._id}
            className='square rounded-4'
            src={thisProduct.image}
            alt={thisProduct.name}
            fluid
          />
        </Col>
        <Col className='square rounded-4 pt-4' lg={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h5 key={thisProduct._id}>{thisProduct.name}</h5>
            </ListGroup.Item>
            <ListGroup.Item key={thisProduct._id}>
              Price: $ {thisProduct.price}
            </ListGroup.Item>
            <ListGroupItem key={thisProduct._id}>
              Description:{thisProduct.description}
            </ListGroupItem>
            <ListGroupItem key={thisProduct._id}>
              {thisProduct.category}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg={3}>
          <Card className='py-3 my-3 border-0'>
            <ListGroup ariant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong key={thisProduct._id}>
                      CA ${thisProduct.price}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col key={thisProduct._id}>
                    {thisProduct.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  key={thisProduct._id}
                  className='btn-black'
                  type='button'
                  disabled={thisProduct.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
