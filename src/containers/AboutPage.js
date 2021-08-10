import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBCard  } from "mdbreact";

const AboutPage = () => {
  return (
    <MDBCard className="my-5 px-1 pb-5">
      <section className="text-center my-5 bg-light">
        <h2 className="h1-responsive font-weight-bold my-5">
          Who are we?
        </h2>
        <p className="lead black-text w-responsive mx-auto mb-5">
          Tech Dome is the company which is resposible to provide latest technology solutions
           to the society. We want to help anyone in need of our services at a professional 
           level and very low price.
        </p>

				<MDBRow className="container">
          <MDBCol>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Education</h5>
                <p>
                  Education is the backbone of obtaining knowledge on daily basis. We are proud to be one of 
                  those who helps in this catergory. In order to boost the knowledge searching technology is the 
                  best to go with in this 21<sup>st</sup> century. We provide tools which are prepared by professional teachers
                  so that we can help in providing this education with the help of technology.
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
                  education level and give all the chance to get the best of it. We use better technology  everyday so that we can
                   compete with the world to provide you with the world in giving better education.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Videos</h5>
                <p className="">
                  For more visual and work, effects increases the taste of the technology and education being provided 
                  at much more high quality videos, with graphics which will help to elaborate more on the contents of the videos
                  being provided by our facilitators.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBCard>
  );
}

export default AboutPage;