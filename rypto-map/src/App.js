import './App.css';

import { MapPage } from "./pages";
import { Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div> 
      <h1> One of Kind!</h1> 
      <p> Connect your metamask wallet, add coffee shops to the map and get rewarded for adding shops </p>
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
