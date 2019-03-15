import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import Slide from '../../components/slide/Slide'

function MountainManSlide() {
  return (
    <Slide
      imgSrc={"ski_hiking.jpg"}
      className={"home-slides mountain-man-slide"}
    >
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h2>Mountain Man</h2>
            <h4>
              The mountains offer serenity and humility. I’m a proud weekend warrior who loves big mountain skiing.
              Born in Crested Butte, I’ve slowly found my way up to the coastal mountains of British Columbia.
            </h4>
          </Col>
          <Col md={6} sm={12}/>
        </Row>
      </Container>
    </Slide>
  )
}

export default MountainManSlide;