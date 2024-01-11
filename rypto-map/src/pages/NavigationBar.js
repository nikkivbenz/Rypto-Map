import Nav from 'react-bootstrap/Nav';

function NavigationBar() {
  return (
    <Nav id="nav" variant="pills" className="justify-content-center" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link eventKey="line-0">what's this for? </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">technologies implemented</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">github</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">about developer</Nav.Link>
      </Nav.Item>


    </Nav>
  );
}

export default NavigationBar;