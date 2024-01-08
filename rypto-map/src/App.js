import './App.css';
import React, { useState } from 'react';

import { MapPage, CoffeeForm }from "./pages";
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
  );
}


function App() {

  // const [account, setAccount] = useState();
  // const { sdk, connected, connecting, provider, chainId } = useSDK();

  // const connect = async () => {
  //   try {
  //     const accounts = await sdk?.connect();
  //     setAccount(accounts?.[0]);
  //   } catch(err) {
  //     console.warn(`failed to connect..`, err);
  //   }
  // };

  const { ready } = useSDK();

  if (!ready) {
    return <div>Loading...</div>;
  }
  
  return (
    <div id = "siteLayout"> 
    <Row id="titleDescription"> 
      <Col> 
      <h1> One of Kind: Long Beach Edition! </h1> 
      <p> Connect your metamask wallet, add coffee shops to the map and get rewarded for adding *unique* spots! </p>
      </Col> 
      <Col> 
      {/* <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        Connect MetaMask Wallet 
      </button>
      {connected && (
        <div>
          <>
            {chainId && `Connected chain: ${chainId}`}
            <p></p>
            {account && `Connected account: ${account}`}
          </>
        </div>
      )} */}

        <AppReady />
      </Col>
      </Row> 
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