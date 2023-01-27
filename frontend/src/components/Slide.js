import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const Slide = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }

  return (
    <div className='container w-100'>
      <Carousel activeIndex={index} onSelect={handleSelect} className="container-fluid">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide-1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide-2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide-3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slide
