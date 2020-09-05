import React from 'react';
import {
MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBRow, MDBCol
} from "mdbreact";

const About = () => {
return (
<div>
  <MDBRow>
    <MDBCol md='6'>
        <MDBCard border="info" className="m-3" >
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody className="text-info">
            <MDBCardTitle tag="h5">Info card title</MDBCardTitle>
            <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </MDBCardText>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>

    <MDBCol md='6'>
        <MDBCard border="dark" className="m-3" >
        <MDBCardHeader>Header</MDBCardHeader>
        <MDBCardBody className="text-dark">
            <MDBCardTitle tag="h5">Dark card title</MDBCardTitle>
            <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </MDBCardText>
        </MDBCardBody>
        </MDBCard>
    </MDBCol>
  </MDBRow>
</div>
);
};

export default About;