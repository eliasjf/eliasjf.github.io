import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

import Slide from '../../components/slide/Slide'

function ProductManger() {
  return (
    <Slide
      imgSrc={"portugal_web_summit.jpg"}
      className={"home-slides product-manager-slide"}
    >
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <h2>Technical Product Manager</h2>
            <h4>
              Although people are harder than computers, I prefer to solve problems for humans. I thrive as a
              technical product manager who works closely with full stack development teams, stakeholders and
              customers to rapidly and iteratively deliver value.
            </h4>
          </Col>
          <Col md={6} sm={12}/>
        </Row>
      </Container>
    </Slide>
  )
}

export default ProductManger;