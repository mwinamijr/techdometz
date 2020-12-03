import React from "react";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";

const AboutPage = () => {
  return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
          Who are we?
        </h2>
        <p className="lead black-text w-responsive mx-auto mb-5">
          Tech Dome is the company which is resposible to provide latest technology solutions
           to the society. We want to help anyone in need of our services at a professional 
           level and very low price.
        </p>

				<MDBRow>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Education</h5>
                <p>
                  Education is the backbone of obtaining knowledge on daily basis. WE are proud to be one of 
                  those who helps in this catergory. In order to boost the knowledge searching technology is the 
                  best to go with in this 21<sup>st</sup> century. 
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Technology</h5>
                <p className="">
                  Education combined with technology becomes much better in all ways. Hence 
                  we are ready to provide you with the best of technology to maximize 
                  education level and give all the chance to get the best of it.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Effects</h5>
                <p className="">
                  For more visual and work, effects increases the taste of the technology and education being provided 
                  at much more 
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
            />
          </MDBCol>
        </MDBRow>
				<br />
        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Education</h5>
                <p>
                  Education is the backbone of obtaining knowledge on daily basis. WE are proud to be one of 
                  those who helps in this catergory. In order to boost the knowledge searching technology is the 
                  best to go with in this 21<sup>st</sup> century. 
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Technology</h5>
                <p className="">
                  Education combined with technology becomes much better in all ways. Hence 
                  we are ready to provide you with the best of technology to maximize 
                  education level and give all the chance to get the best of it.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Effects</h5>
                <p className="">
                  For more visual and work, effects increases the taste of the technology and education being provided 
                  at much more 
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          
        </MDBRow>
      </section>
  );
}

export default AboutPage;