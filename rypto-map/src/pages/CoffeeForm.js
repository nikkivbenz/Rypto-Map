import React, { useState, useContext } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { MarkersContext } from './MarkersContext';
import axios from 'axios';


function CoffeeForm() {
    // const [address, setAddress] = useState('');
    // const [error, setError] = useState('');
    // const [showCityAlert, setCityAlert] = useState(false); // Define both showAlert and setShowAlert
    // const [cityError, setCityError] = useState('');
    // const [showAlert, setShowAlert] = useState(false); // Define both showAlert and setShowAlert
    // const { addMarker } = useContext(MarkersContext);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setError('');
    //     setShowAlert(false); // Reset showAlert state

    //     try {
    //       if (address.includes("Long Beach, CA")) {
    //         const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
    //           params: {
    //               format: 'json',
    //               q: address
    //             }
    //         }); 

    //       if (response.data && response.data.length > 0) {
    //           const loc = response.data[0];
    //           addMarker({
    //               position: [parseFloat(loc.lat), parseFloat(loc.lon)],
    //               label: address
    //           });
    //           setAddress('');
    //       } else {
    //           setCityError('No results found for the given address.');
    //           setCityAlert(true); // Set showAlert to true if no results found
    //       }
    //       } else {
    //         // Show alert if address is not valid
    //         setShowAlert(true);
    //       }
    //     } catch (err) {
    //         setError('An error occurred while searching for the address.');
    //         setShowAlert(true); // Set showAlert to true if an error occurred
    //     }
    // };


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


      <Alert  variant="danger" show={showCityAlert} className="mt-3">
        Address is not valid. Please enter an address in Long Beach, California.
      </Alert>
    </Container>
  );
}

export default CoffeeForm; 
