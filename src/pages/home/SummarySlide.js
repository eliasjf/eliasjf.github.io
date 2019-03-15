import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import Slide from '../../components/slide/Slide'


function SummarySlide() {
  return (
    <Slide
      imgSrc={"revelstoke_mountains.jpg"}
      className={"home-slides summary-slide"}
    >
      <Container>
        <Row>
          <Col>
            <h1>Elias Friedman</h1>
            <h4>Technologist | Outdoorsman</h4>
          </Col>
        </Row>
      </Container>
    </Slide>
  )
}

export default SummarySlide;