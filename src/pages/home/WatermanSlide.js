import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import Slide from '../../components/slide/Slide'

function WatermanSlide() {
  return (
    <Slide
      imgSrc={"mexico_surfing.jpg"}
      className={"home-slides waterman-slide"}
    >
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h2>Waterman</h2>
            <h4>
              If I’m not in the mountains, I’m probably recharging by the water. Surfing and whitewater kayaking keep
              my adrenaline pumping. Whether it’s putting on a wetsuit to surf Tofino or getting sunburnt in Central
              America, it’s all fun!
            </h4>
          </Col>
          <Col md={6} sm={12}/>
        </Row>
      </Container>
    </Slide>
  );
}

export default WatermanSlide;