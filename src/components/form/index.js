import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET')
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = { method, url };
    if (method === 'POST' || method === 'PUT') { 
      formData.body = body;
    }
    props.handleApiCall(formData);
  }

  const handleBodyChange = (e) => { 
    const newBody = e.target.value;
    setBody(newBody);
  }

  const handleClickMethod = (e) => {
    const newMethod = e.target.id;
    setMethod(newMethod);
  }

  const handleUrlChange = (e) => { 
    const newUrl = e.target.value;
    setUrl(newUrl);
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name="url" data-testid="url-input" type="text" value={ url } onChange={ handleUrlChange } />
            <button type="submit" data-testid="url-input-submit" disabled={ props.loading }>GO!</button>
          </label>
          <div className="input-url-display">{url}</div>
          <label className="methods">
          <span id="GET"
            className={method === 'GET' ? 'active' : 'inactive'}
            onClick={handleClickMethod}>GET</span>
          <span id="POST"
            className={method === 'POST' ? 'active' : 'inactive'}
            onClick={handleClickMethod}>POST</span>
          <span id="PUT"
            className={method === 'PUT' ? 'active' : 'inactive'}
            onClick={handleClickMethod}>PUT</span>
          <span id="DELETE"
            className={method === 'DELETE' ? 'active' : 'inactive'}
            onClick={handleClickMethod}>DELETE</span>
          </label>
          <div className="request-body-input-container">
            {
              props.method === "PUT" || props.method ==="POST"  ?
              <div>
                Body:
                <textarea className="request-body-input" value={body} onChange={handleBodyChange}></textarea>
              </div>
              : ''
            }
          </div>
        </form>
      </>
  );
}

export default Form;
