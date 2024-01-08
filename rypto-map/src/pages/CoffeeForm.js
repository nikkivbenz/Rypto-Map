import React, {useState} from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const CoffeeForm = () => {
    const [address, setAddress] = useState('');
    const [coffeeShop, setCoffeeShop] = useState('');
    const [showAlert, setShowAlert] = useState(false); 
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [Coord, setCoord] = useState(''); 
    const [coordAlert, showCoordAlert] = useState(false); 

    const getGeolocation = async (address) => {
      try {
          const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
          
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
  
          if (data.length > 0) {
              const { lat, lon } = data[0];
              setCoord(`Latitude: ${lat}, Longitude: ${lon}`);
              return { lat, lon };
          } else {
              console.log('No results found');
              return null;
          }
      } catch (error) {
          console.error('Error fetching geolocation:', error);
          return null;
      }
  };

    const isValidAddress = (address) => {
        const geoloc = getGeolocation(address); 
        if (geoloc == null) {
          console.log("GEOLOCATION RETURNED NULL ")
          return (false); 
        } else {
          console.log("VALID ADDRESS LAT/LONG: ", geoloc); 
           return (true); 
        }

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        if (!isValidAddress(address)) {
          setShowAlert(true);
        } else {
          setShowAlert(false); 
          setAddress(address)
          setCoffeeShop(coffeeShop)
          showCoordAlert(true); 

        }
        setTimeout(() => {
          console.log('Form submitted');
          setIsSubmitting(false); // Re-enable the button after 5 seconds
          showCoordAlert(false); 
              }, 60000);

    };

    return (
      <Container className="mt-5">
          {showAlert && <Alert variant="danger">Please enter a valid address in Long Beach.</Alert>}
          <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Address:</Form.Label>
                    <Form.Control
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter address in Long Beach"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Coffee Shop Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={coffeeShop}
                        onChange={(e) => setCoffeeShop(e.target.value)}
                        placeholder="Enter coffee shop name"
                    />
                </Form.Group>
                <Button id= "formSubmitBtn" variant="primary" type="submit disabled={isSubmitting}">
                  {isSubmitting ? 'Submitted' : 'Submit'}
                </Button>
            </Form>
            {coordAlert && <Alert variant="danger">{Coord}</Alert>}
        </Container>
    );
};

export default CoffeeForm;

