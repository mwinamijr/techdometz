import React from "react";
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { Card } from 'react-bootstrap'

import Team from "../components/home/Team";

const TeamPage = () => {
  return (
    <MDBCard className="my-5 px-1 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing Developers
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            The tech dome tz team is always working harder to ensure our clients get the quality products they expect from us.
          </p>
          
          <Card style={{ width: '50%' }}>
            <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" />
            <Card.Body>
              <Card.Title>Athumani Mwinami</Card.Title>
              <p className='font-weight-bold blue-text'>Wev developer</p>
              <Card.Text>
              I am a web developer using my favorite languages (Python and JavaScript).
               I also do video editing, 3D modelling and Visual effexts (VFX){' '}
              </Card.Text>
            </Card.Body>


          <MDBCol md='12' className='d-flex justify-content-center'>
            <a href="https://facebook.com/mwinamijr" target="_blank" rel="noopener noreferrer">
            <MDBBtn rounded floating color='fb'>
              <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
            </MDBBtn>
            </a>

            <a href="https://instagram.com/_mwinami" target="_blank" rel="noopener noreferrer">
            <MDBBtn rounded floating color='ins'>
              <MDBIcon size='lg' fab icon='instagram'></MDBIcon>
            </MDBBtn>
            </a>

            <a href="https://twitter.com/mwinami_" target="_blank" rel="noopener noreferrer">
            <MDBBtn rounded floating color='tw'>
              <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
            </MDBBtn>
            </a>

            <a href="https://github.com/mwinamijr" target="_blank" rel="noopener noreferrer">
            <MDBBtn rounded floating color='git'>
              <MDBIcon size='lg' fab icon='github'></MDBIcon>
            </MDBBtn>
            </a>

          </MDBCol>


          </Card>
        </MDBCardBody>
        
      </MDBCard>
  );
}

export default TeamPage;