import React from "react";
import {MDBNavbar,MDBNavbarBrand,} from "mdbreact";

const Navbar = (props) => {
       return(
         <MDBNavbar color="info-color" dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">Weather Dashboard</strong>
            </MDBNavbarBrand>
        </MDBNavbar>
    );
}

export default Navbar;