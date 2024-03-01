import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';


import { addToCart }  from '../features/CardSlice';

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch
  return ( 
    <MDBContainer className='mt-5'>
      <MDBRow className='mb-3'>
        {
          items.map((item) => (
            <MDBCol key={item.id}>
              <MDBCard>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                  <MDBCardImage src={item.img} fluid alt='This is an image' />
             
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>
                    {item.price}
                  </MDBCardText>
                  <MDBBtn onClick={() => dispatch(addToCart(item))}> Add To Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))
        }
      </MDBRow>
    </MDBContainer>
  )
}
