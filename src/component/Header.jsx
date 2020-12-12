import React, { useState } from 'react';
import {
  NavbarToggler, Collapse, NavbarBrand,
  Nav, Navbar, NavItem, NavLink
} from 'reactstrap';
import Logo from '../logo.svg';
import './component.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navLink = {
    color: 'white'
  }
  return (
    <div className="header">
      <Navbar light expand="md" className="Navbar">
        <NavbarBrand href="/" >Talent Refactory</NavbarBrand>
        <NavbarToggler onClick={toggle} className="mr-2 bg-black" />
        <Collapse isOpen={isOpen} navbar style={navLink}>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={navLink} href="/cv">CV</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={navLink} href="/git">Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={navLink} href="/conflict-git">Conflict Git</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>
            <NavLink style ={navLink} className="admin-super" href="/admin">Admin</NavLink>
          </NavbarText> */}
        </Collapse>
      </Navbar>

    </div>
  );
}
export default Header;