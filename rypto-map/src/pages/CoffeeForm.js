import React from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

function CoffeeForm() {

  //interacting with bsc chain

  return (
      <Container className="mt-5">
      {/* <Form id="addressForm" onSubmit={handleSubmit}>
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
      </Alert> */}
    </Container>          
  );
}

export default CoffeeForm; 
