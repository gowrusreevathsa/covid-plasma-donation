import React from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";

const NavigationBar = () => {
  return (
    // <div className="navbar">
    //   <a>Home</a>
    //   <a>About</a>
    //   <a>Health Info</a>
    //   <a>Can you donate plasma?</a>
    // </div>

    <Navbar color="light" light expand="md">
      <NavbarBrand href="#">React-Bootstrap</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
