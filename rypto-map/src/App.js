import './App.css';

import { MapPage } from "./pages";
import { Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div> 
      <h1> One of a kind! </h1> 
      <Row> 
        <Col> 
        <div className="App">
        < MapPage /> 
      </div></Col>
      </Row>  
    </div> 
  );
}

export default App;
