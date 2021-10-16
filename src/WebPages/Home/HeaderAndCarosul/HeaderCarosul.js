import React from 'react';
import { Carousel } from 'react-bootstrap';

import carosulOne from "../../../Images/Carosul/carosul-1.jpg"
import carosulTwo from "../../../Images/Carosul/carosul-2.jpg"
import carosulThree from "../../../Images/Carosul/carosul-3.jpg"

const HeaderCarosul = () => {
    return (
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carosulOne}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carosulTwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carosulThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default HeaderCarosul;