import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="#home" className="logo">
        <h3>movie</h3>
      </Navbar.Brand>
      <Form className="d-flex search-form ">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2 search-input"
          aria-label="Search"
        />
        <Button variant="outline-success" className='searchButton'>
          Search
        </Button>
      </Form>
    </Navbar>
  );
};

export default CustomNavbar;
