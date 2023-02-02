import React, { useState } from "react";
import { Carousel, Row } from "react-bootstrap";

const Slide = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Row className='py-5' >
      <div className="pt-5">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/images/slide-1.png'
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/images/slide-2.png'
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='/images/slide-3.png'
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Row>
  );
};

export default Slide;
