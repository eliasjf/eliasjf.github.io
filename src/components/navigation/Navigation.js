import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

import './Navigation.scss'
import Routes from '../../util/routes'

function Navigation() {
  return (
    <div className="ps-nav">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href={Routes.Home}>
          <i className="fas fa-mountain"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href={Routes.Contact}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;