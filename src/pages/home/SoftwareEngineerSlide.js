import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import Slide from '../../components/slide/Slide'

function SoftwareEngineerSlide() {
  return (
    <Slide
      imgSrc={"san_francisco.jpg"}
      className={"home-slides software-eng-slide"}
    >
      <Container>
        <Row>
          <Col md={6} sm={12}/>
          <Col md={6} sm={12}>
            <h2>Software Engineer</h2>
            <h4>
              I love solving business problems by leveraging technology. I specialize in leveraging the right
              technology to solve the problem at hand while utilizing cloud infrastructure to continuously deliver and
              scale.
            </h4>
          </Col>
        </Row>
      </Container>
    </Slide>
  );
}

export default SoftwareEngineerSlide;
