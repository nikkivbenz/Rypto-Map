import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <Nav id="nav" variant="pills" className="justify-content-center" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="line-0">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Option 2</Nav.Link>
      </Nav.Item>


    </Nav>
  );
}

export default NavigationBar;