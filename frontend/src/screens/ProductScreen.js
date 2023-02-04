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
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div id='prodW'>
      <Button className='my-3' href='/'>
        Go Back
      </Button>
      <Row className='py-4'>
        <Col lg={5}>
          <Image
            className='square rounded-4'
            src={product.image}
            alt={product.name}
            fluid
          />
        </Col>
        <Col className='square rounded-4 pt-4' lg={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h5>{product.name}</h5>
            </ListGroup.Item>
            <ListGroup.Item>Price: $ {product.price}</ListGroup.Item>
            <ListGroupItem>Description:{product.description}</ListGroupItem>
            <ListGroupItem>{product.category}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg={3}>
          <Card className='py-3 my-3 border-0'>
            <ListGroup ariant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price</Col>
                  <Col>
                    <strong>CA ${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className='btn-black'
                  type='button'
                  disabled={product.countInStock === 0}
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
