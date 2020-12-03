import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const ServicesPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Get proffesional services
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          We provide the following services at a very low and affordable price.
          For exta details check out more of our services and get full in detail description
          on our specific service you need.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="computer" className="pr-2" />
                Web
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Web development</strong>
            </h3>
            <p>
              We design professional websites at a very low price. Depending on what type of website 
              you need we will provide it for you at a very short period of time. 
              Also we will provide for you with 1 year of <strong>Hosting and maintanance for free.</strong> 
            </p>
            
            <MDBBtn color="success" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                Video
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Video recording and editing</strong>
            </h3>
            <p>
              Videos for different events can provide memories and good records. We provide this service to 
              all who need them at different qualities depending on your needs. We provide <strong>Video recording</strong> 
              for different events such as <em>Wedding</em>, <em>Graduations</em>, <em>Sports events</em> and
                many others. We also provide 
              <strong>Video editing</strong> service at professional level using world wide used softwares to give you
              the greatest quality we can provide. <strong><em>For more details click the button below to know more ...</em></strong>
            </p>
            <MDBBtn
              color="red"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                VFX
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Visual effects</strong>
            </h3>
            <p>
              Get latest effects for your videos so that you can use them on your own videos.
              Also with professional video editing we provide more to reach the maximum satisfaction 
              of our customers. 
            </p>

            <MDBBtn color="green" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
                3D
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>3D design</strong>
            </h3>
            <p>
            We provide 3D modeling of architcture buildings, car designs and environment creation. 
              3D modeling and designing of different items from smaller ones like a pen to the 
              larger ones like the whole world.
              <strong><em>For more details click the button below to know more ...</em></strong>
            </p>
            <MDBBtn
              color="red"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ServicesPage;