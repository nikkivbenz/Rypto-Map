import './App.css';

import {CoffeeForm }from "./pages";
import { Row, Col} from 'react-bootstrap';

import {useState, React } from 'react'; 
import { MarkerContext } from './pages/MarkerContext';

function App() {
  const [markers, setMarkers] = useState([]); 

  return (
    <div id = "siteLayout"> 
      <h1> One of Kind: Long Beach Edition! </h1> 
      <p> Connect your metamask wallet, add coffee shops to the map and get rewarded for adding *unique* spots! </p>
      <div> 
        <CoffeeForm /> 
      </div>
    </div> 
  );
}

export default App;
