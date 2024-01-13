import './App.css';
import React from 'react';

import { MapPage, CoffeeForm, Footer, NavigationBar, TransferCFE }from "./pages";
import { Row, Col} from 'react-bootstrap';

import { MetaMaskButton, useAccount, useSDK, useSignMessage} from '@metamask/sdk-react-ui';



function AppReady() {
  const {
    data: signData,
    isError: isSignError,
    isLoading: isSignLoading,
    isSuccess: isSignSuccess,
    signMessage,
  } = useSignMessage({
    message: 'gm wagmi frens',
  });

  const { isConnected } = useAccount();

  return (
    <div> 
    <div className="App">
      <header className="App-header">
        <MetaMaskButton theme={'light'} color="white"></MetaMaskButton>
        {isConnected && (
          <>
            <div style={{ marginTop: 20 }}>
              <button disabled={isSignLoading} onClick={() => signMessage()}>
                Sign message
              </button>
              {isSignSuccess && <div>Signature: {signData}</div>}
              {isSignError && <div>Error signing message</div>}
            </div>
          </>
        )}
      </header>
    </div>
    </div>
  );
}


function App() {

  const { ready } = useSDK();

  if (!ready) {
    return <div>Loading...</div>;
  }
  
  return (
    <div id = "siteLayout"> 
    <NavigationBar />
    <Row id="titleDescription"> 
      <Col> 
      <h1> One of Kind: Long Beach Edition! </h1> 
      <p> Connect your metamask wallet, add coffee shops to the map and get rewarded for adding *unique* spots! </p>
      </Col> 
      <Col> 
        <AppReady />
      </Col>
      </Row> 
      <Row> 
        <Col className = "col col-lg-4" > 
          <CoffeeForm /> 
          <TransferCFE/> 
        </Col>
        <Col className = "col"> 
        < MapPage /> 
        </Col>
      </Row>  
      <Footer /> 
    </div> 
  );
}
export default App; 