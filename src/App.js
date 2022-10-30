import React, { useState } from 'react';
// import axios from 'axios';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({url: '', method: 'GET'});
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    let data;
    setLoading(true);
    try {
      //const axiosReq = {
      const axiosReq = {
        method: requestParams.method,
        url: requestParams.url,
      }
      if (requestParams.method === 'POST' || requestParams.method === 'PUT') { 
        axiosReq.data = requestParams.body;
      }
      data = await axios(
        axiosReq
      );
    } catch (e) { 
      data = e;
    }
    setLoading(false);
    setData(data);
    setRequestParams(requestParams)
  }

  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div data-testid="url-display">URL: {requestParams.url}</div>
      <Form loading={ loading } handleApiCall={callApi} />
      { loading ? "loading..." :
        <Results data={data} />
      }
      <Footer />
    </>
  );
  
}

export default App;
