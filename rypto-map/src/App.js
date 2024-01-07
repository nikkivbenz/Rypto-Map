import './App.css';

import { MapPage, CoffeeForm }from "./pages";
import { Row, Col} from 'react-bootstrap';

import {useState, React } from 'react'; 
import { MarkerContext } from './pages/MarkerContext';

function App() {
  return (
    <div id = "siteLayout"> 
      <h1> One of Kind: Long Beach Edition! </h1> 
      <p> Connect your metamask wallet, add coffee shops to the map and get rewarded for adding *unique* spots! </p>
      <Row> 
        <Col className = "col col-lg-4" > 
          <CoffeeForm /> 
        </Col>
        <Col className = "col"> 
        < MapPage /> 
        </Col>
      </Row>  
    </div> 
  );
}

export default App;
