import React, {useState} from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const CoffeeForm = () => {
    const [address, setAddress] = useState('');
    const [coffeeShop, setCoffeeShop] = useState('');

    const isValidAddress = (address) => {
        // Implement your logic to validate if the address is in Long Beach.
        // This is a placeholder logic.
        return address.toLowerCase().includes('long beach');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValidAddress(address)) {
            Alert('Please enter a valid address in Long Beach.');
        } else {
            console.log('Address:', address, 'Coffee Shop:', coffeeShop);
            //get api cooridnates 
        }
    };

    return (
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
            <div>
                <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter address in Long Beach"
                    />
                </label>
            </div>
            <div>
                <label>
                    Coffee Shop Name:
                    <input
                        type="text"
                        value={coffeeShop}
                        onChange={(e) => setCoffeeShop(e.target.value)}
                        placeholder="Enter coffee shop name"
                    />
                </label>
            </div>
            <Button type="submit">Submit</Button>
        </Form>
        </Container>
    );
};

export default CoffeeForm;

