import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage = () => {
  return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          WELCOME : أهلا بك : KARIBU
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          You have arrived at your destination for Tech Solutions. <br />
          How can we help you?
        </p>

        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="flag-checkered"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Web development</h5>
                <p className="grey-text">
                  Get your professional website at very low and affordable price.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Photography</h5>
                <p className="grey-text">
                  High quality photographs for your bussiness or life events like weddings and graduations.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="glass-martini" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Graphics Design</h5>
                <p className="grey-text">
                  Logo design, Graphics, Typography
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
              alt=""
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">3D design</h5>
                <p className="grey-text">
                  3D modelling with powerful free software Blender
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="bolt" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">VFX</h5>
                <p className="grey-text">
                  Visual effects for videos and photography.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Animations</h5>
                <p className="grey-text">
                  Creative and educational animations
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
  );
}

export default FeaturesPage;