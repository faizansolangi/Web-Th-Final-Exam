import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Logo from '../assets/images/logo.png';

function NavBar() {
  return (
    <Nav className="justify-content-end" activeKey="/home" style={{backgroundColor:'#110915', paddingLeft:'30px'}}>
    <Nav.Item>
      <Nav.Link href="/home" style={{color:'#F9F9F9'}}>Web3Makr</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1" style={{color:'#FFFFFF'}}>White paper</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2" style={{color:'#FFFFFF'}}>Services</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3" style={{color:'#FFFFFF'}}>Tools</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-4" style={{color:'#FFFFFF'}}>Contact us</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Button variant="outline-primary">Primary</Button>
    </Nav.Item>
  </Nav>
  );
}

export default NavBar;