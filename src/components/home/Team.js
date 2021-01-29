import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const Team = () => {
  return (
    <MDBRow>
      <MDBCol md='4'>
        <MDBCard>
          <MDBCardImage
            hover
            overlay='white-light'
            className='card-img-top'
            src='https://mdbootstrap.com/img/Photos/Others/men.jpg'
            alt='man'
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Athumani Mwinami</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Wev developer</p>

            <MDBCardText>
              I am a web developer using my favorite languages (Python and JavaScript).
               I also do video editing, 3D modelling and Visual effexts (VFX){' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
            <a href="https://facebook.com/techdome1" target="_blank" rel="noopener noreferrer">
              <MDBBtn rounded floating color='fb'>
              <Link to='https://www.facebook.com/mwinamijr'>
                <MDBIcon size='lg' fab icon='facebook-f'></MDBIcon>
                </Link>
              </MDBBtn>
              </a>

              <MDBBtn rounded floating color='tw'>
              <Link to='https://www.twitter.com/mwinamijr'>
                <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
                </Link>
              </MDBBtn>

              <MDBBtn rounded floating color='ins'>
              <Link to='https://www.instagram.com/mwinamijr'>
                <MDBIcon size='lg' fab icon='instagram'></MDBIcon>
                </Link>
              </MDBBtn>
              <MDBBtn rounded floating color='git'>
              <Link to='https://www.github.com/mwinamijr'>
                <MDBIcon size='lg' fab icon='github'></MDBIcon>
                </Link>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
    </MDBRow>
  )
}

export default Team;