import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (
    <MDBCard className="my-5 px-1 pb-5 text-center">
      <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Contact Us!
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            For any questions regarding our services don't hesitate to contact us for 
            futher details. Leave your message using the form below.
          </p>
        </MDBCardBody>
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form">
              <h3 className="mt-4 text-left">
                <MDBIcon icon="envelope" className="pr-2" />
                Write to us:
              </h3>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-name"
                      label="Your name"
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-email"
                      label="Your email"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-phone"
                      label="Your phone"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                      label="Your message"
                    />
                    <MDBBtn rounded color="blue">
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 black-text">
              <h3 className="my-4 pb-2">Contact information</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                    <MDBIcon icon="map-marker-alt" className="pr-2" />
                    P.O Box 507, Babati - Manyara
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="phone" className="pr-2" />+ 255 686 883 601
                  </p>
                </li>
                <li>
                  <p>
                    <MDBIcon icon="envelope" className="pr-2" />
                    techdometz@gmail.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              <ul className="list-inline text-center list-unstyled">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
              </ul>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
  );
}

export default ContactPage;