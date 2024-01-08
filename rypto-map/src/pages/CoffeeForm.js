import React, { useState, useContext } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

import { MarkersContext } from './MarkersContext';
import axios from 'axios';
import { MarkerContext } from './MarkerContext';


function CoffeeForm() {
  const [marker,setMarker] = useState([])

  return (

    <Row> 
    <Col className = "col col-lg-4" >
        <Container className="mt-5">
        <Form id="addressForm" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="address">Address</Form.Label>
            <Form.Control
              type="text"
              id="address"
              placeholder="Enter address in Long Beach, CA"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
        <Button variant="primary" type="submit" id = "formSubmitBtn" >
            Submit
          </Button>

        </Form>
        <Alert  variant="danger" show={showCityAlert} className="mt-3">
          Address is not valid. Please enter an address in Long Beach, California.
        </Alert>
      </Container>          
    <Col className = "col"> 
    </Col>
    <MarkerContext.Provider value={{text, setText}}> 
      < MapPage /> 
    </MarkerContext.Provider>
    </Col>
  </Row>  
  );
}

export default CoffeeForm; 
