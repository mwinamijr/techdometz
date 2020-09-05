import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const Services = () => {
  return (
      <div>
        <hr />
        <MDBRow>
          <MDBCol md='4'>
            <MDBCard>
              
              <MDBCardBody className='elegant-color white-text rounded-bottom'>
                
                <MDBCardTitle>MDBCard Title</MDBCardTitle>
                <hr className='hr-light' />
                <MDBCardText className='white-text'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card&apos;s content.
                </MDBCardText>
                <a href='#!' className='black-text d-flex justify-content-end'>
                  <h5 className='white-text'>
                    Read more
                    <MDBIcon icon='angle-double-right' className='ml-2' />
                  </h5>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard>
              
              <MDBCardBody>
                <MDBCardTitle>Card Title</MDBCardTitle>
                <hr />
                <MDBCardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card&apos;s content.
                </MDBCardText>
                <a href='#!' className='black-text d-flex justify-content-end'>
                  <h5>
                    Read more
                    <MDBIcon icon='angle-double-right' className='ml-2' />
                  </h5>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCard>
              
              <MDBCardBody className='elegant-color white-text rounded-bottom'>
                
                <MDBCardTitle>MDBCard Title</MDBCardTitle>
                <hr className='hr-light' />
                <MDBCardText className='white-text'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card&apos;s content.
                </MDBCardText>
                <a href='#!' className='black-text d-flex justify-content-end'>
                  <h5 className='white-text'>
                    Read more
                    <MDBIcon icon='angle-double-right' className='ml-2' />
                  </h5>
                </a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </div>
  )
}

export default Services;