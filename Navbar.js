import React from 'react';
import { PiShoppingCartThin } from "react-icons/pi";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
      
      
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        
        <Link to={`/`}>All Products</Link>
        <Link to={`/cart`}> 
      <MDBBtn color=''>
             <PiShoppingCartThin style={{fontSize:`27px`,color:`#fff`}}/>
              (0)
      </MDBBtn>
      </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}