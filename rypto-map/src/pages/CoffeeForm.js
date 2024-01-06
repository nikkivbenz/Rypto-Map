import React, { useState, useContext } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { MapMarkers } from './MapMarkers';

function CoffeeForm() {
    const [address, setAddress] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const { addMarker } = useContext(MarkersContext);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Here you would call the geocoding service
      const isValid = address.includes("Long Beach, CA");
      if (isValid) {
        const newMarker = { /* Your geolocation data */ };
        addMarker(newMarker);
        setAddress(''); // Reset the address input
        setShowAlert(false);
      } else {
        setShowAlert(true);
      }
    };
  

  return (
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


      <Alert  variant="danger" show={showAlert} className="mt-3">
        Address is not valid. Please enter an address in Long Beach, California.
      </Alert>
    </Container>
  );
}

export default CoffeeForm; 
