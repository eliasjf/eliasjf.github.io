import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import './contact.scss'

function Contact() {
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col>
            <div className="title">
              <h1>Can't we just talk!</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="mailto:ejfriedman7@gmail.com">
              <i className="far fa-envelope"/>
            </a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/friedmanelias/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"/>
            </a>
          </Col>
          <Col>
            <a href="https://github.com/eliasjf" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"/>
            </a>
          </Col>
          <Col>
            <a href="https://twitter.com/elias_friedman" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"/>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;