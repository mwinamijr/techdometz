import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import { MDBIcon } from 'mdbreact';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <div>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <div className="container">
          <Navbar.Brand href="/">Tech Dome tz</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/developers">Developers</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <div>
            <a href="https://facebook.com/techdometz" target="_blank" rel="noopener noreferrer" className="fb-ic mr-3 black-text">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="https://twitter.com/techdometz" target="_blank" rel="noopener noreferrer" className="tw-ic mr-3 black-text">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="#!" className="li-ic mr-3 black-text">
              <MDBIcon fab icon="linkedin-in" />
            </a>
            <a href="https://instagram.com/techdometz" target="_blank" rel="noopener noreferrer" className="ins-ic mr-3 black-text">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="https://www.youtube.com/techdometz" target="_blank" rel="noopener noreferrer" className="yt-ic mr-3 black-text">
              <MDBIcon fab icon="youtube" />
            </a>
            <a href="https://github.com/Tech-Dome-tz" target="_blank" rel="noopener noreferrer" className="git-ic mr-3 black-text">
              <MDBIcon fab icon="github" />
            </a>
            </div>
          </Navbar.Collapse>
          </div>
        </Navbar>

      </div>
    </Router>
    );
  }
}

export default NavbarPage;