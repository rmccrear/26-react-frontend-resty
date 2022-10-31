import React, { useState, useReducer } from 'react';
import Fetcher from './lib/fetcher';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history';
import { reducer } from './reducers';

function App(props) {
  const [state, dispatch] = useReducer(reducer, {history: []});
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({url: '', method: 'GET'});
  const [loading, setLoading] = useState(false);

  const callApi = async (requestParams) => {
    setLoading(true);
    const fetcher = new Fetcher();
    const {url, method, body} = requestParams;

    let result;
    if(method === 'POST' || method === 'PUT') {
      if(method === 'POST') {
        result = await fetcher.post(url, {body: body});
      } else if(method === 'PUT') {
        result = await fetcher.put(url, {body: body});
      }
    } else if(method === 'GET') {
      result = await fetcher.get(url);
    } else if(method === 'DELETE') {
      result = await fetcher.delete(url);
    }
    setLoading(false);
    result.data = result.body; // axios puts body in `data`, we will follow that.
    setData(result);
    dispatch({type: 'ADD_TO_HISTORY', restOp: {url, method ,result}});
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
      <History history={state.history} />
      <Footer />
    </>
  );
  
}

export default App;
