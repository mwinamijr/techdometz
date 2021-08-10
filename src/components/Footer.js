import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <div>

<footer className="container py-5">
  <div className="row">
    <div className="col-12 col-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false">
        <title>Product</title>
        <circle cx="12" cy="12" r="10"/>
        <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
      </svg>
      <small className="d-block mb-3 text-muted">&copy; 2019-{new Date().getFullYear()}</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Services</a></li>
        <li><a className="text-muted" href="#">Random feature</a></li>
        <li><a className="text-muted" href="#">Join Us!</a></li>
        <li><a className="text-muted" href="#">Stuff for developers</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Products</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">API</a></li>
        <li><a className="text-muted" href="#">School Systems</a></li>
        <li><a className="text-muted" href="#">Tech Used</a></li>
        <li><a className="text-muted" href="#">Our Clients</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Business</a></li>
        <li><a className="text-muted" href="#">Education</a></li>
        <li><a className="text-muted" href="#">Technology</a></li>
        <li><a className="text-muted" href="#">Gaming</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><a className="text-muted" href="#">Team</a></li>
        <li><a className="text-muted" href="#">Locations</a></li>
        <li><a className="text-muted" href="#">Privacy</a></li>
        <li><a className="text-muted" href="#">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a className='text-muted' href="http://www.techdometz.com"> TechDometz </a>
        </MDBContainer>
      </div>
    </div>
  );
}

export default FooterPage;