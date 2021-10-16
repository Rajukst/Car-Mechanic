import React from 'react';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          
            <Navbar bg="primary" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Link href="#action1">Home</Link>
      <Link href="#action2">Link</Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Link href="#" disabled>
        Link
      </Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button className="mx-2" variant="outline-warning">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;