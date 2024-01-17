import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';



function NavigationBar() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);
  return (
    <div> 
    <Nav id="nav" variant="pills" className="justify-content-center" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={toggleModal}>what's this for? </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">technologies implemented</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/nikkivbenz">github</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">about developer</Nav.Link>
      </Nav.Item>


    </Nav>


    <Modal show={showModal} onHide={toggleModal}>
    <Modal.Header closeButton>
      <Modal.Title>about rypto coffee map! </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Card>
        <Card.Body>
          <Card.Text>
            Add coffee shops around Long Beach and get rewarded with CoffeeCoin. You can purchase NFT's (only with CoffeeCoin) HERE!
          </Card.Text>
        </Card.Body>
      </Card>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={toggleModal}>
        Close
      </Button>
    </Modal.Footer>
    </Modal>
    </div> 
  );
}

export default NavigationBar;