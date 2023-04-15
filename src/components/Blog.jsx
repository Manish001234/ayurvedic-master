import React from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';

const Blog = () => {
  return (
    <div style={{paddingTop:"100px"}} >
     
        <h1>Mushroom World <span style={{color:"#ce1212"}}>Blog</span> </h1><br />
      <MDBCard style={{ maxWidth: '640px' ,margin:'auto'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://iili.io/HvYO3CP.png' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    <br />
    <MDBCard style={{ maxWidth: '640px' ,margin:'auto'}}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://iili.io/HvYO3CP.png' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle> 
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>Last updated 3 mins ago</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </div>
  )
}

export default Blog
