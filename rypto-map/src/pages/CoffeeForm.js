import React, {useState} from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const CoffeeForm = () => {
    const [address, setAddress] = useState(''); // setting address for Lat/Long API (Nominatim) and for smart contract 
    const [coffeeShop, setCoffeeShop] = useState(''); //setting the coffeeShop name for smart contract 
    const [showAlert, setShowAlert] = useState(false);  // for alerting of an invalid address inputted
    const [isSubmitting, setIsSubmitting] = useState(false); //for disabling the button once an address is sumitted; don't overwhelm Nominatim 
    const [Coord, setCoord] = useState(''); //Sets coordinates from address -> coordinates API 
    const [coordAlert, showCoordAlert] = useState(false); //Shows Coordinates when valid address is inputed 

    //ensures address inputted is in long beach california
    function inLongBeachCA(str) {
      const lowerCaseStr = str.toLowerCase();
      return lowerCaseStr.includes('long beach') && lowerCaseStr.includes('ca');
  }

    //converts address into longitutde and latitude coordinates
    const getGeolocation = async (address) => {
      try {
        console.log(" I am in getGeolocation"); 
          const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
          
          const response = await fetch(url);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const data = await response.json();
  
          if (data.length > 0) {
              const { lat, lon } = data[0];
              //sets coordinates for the component to use 
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

    //checks if the address inputted returned valid coordinates
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

    //when the form is submitted, if valid address, it will show the coordinates to the user
    //if invalid, shows the alert for it
    const handleSubmit = (event) => {
      event.preventDefault();

      //checks if address is in long beach california, then it requests its coordinates
      if (inLongBeachCA(address)){
        setIsSubmitting(true);
      
        //if the address is a valid address, then it sets the data for submission to smart contract 
        if(isValidAddress){
          setShowAlert(false); 
          setAddress(address)
          setCoffeeShop(coffeeShop)
          showCoordAlert(true); 
        } else{
          setShowAlert(true);
        }
          //disables the submit button for one minute after submitting
          setTimeout(() => {
            console.log('Cooldown Done!');
            setIsSubmitting(false); 
            showCoordAlert(false); 
          }, 60000);
      }else{
        setShowAlert(true);
      }

   


    };

    return (
      <Container className="mt-5">
        {/* sets the alert for an invalid address  */}
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
                <Button id= "formSubmitBtn" variant={isSubmitting ? "danger" : "primary"}  type="submit disabled={isSubmitting}">
                  {/* if button disabled, submitted shows  */}
                  {isSubmitting ? 'Submitted' : 'Submit'}
                </Button>
            </Form>
            {/* displays the coordinates if valid address submitted */}
            {coordAlert && <Alert variant="success">{Coord}</Alert>}
        </Container>
    );
};

export default CoffeeForm;

