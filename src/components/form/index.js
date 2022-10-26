import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    /*
    const formData = {
      method:'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
      data: 
    };
    */
    const formData = {
      method: props.method,
      url: props.url
    }
    if (props.method === 'POST' || props.method === 'PUT') { 
      formData.body = body;
    }
    props.handleApiCall(formData);
  }

  const handleBodyChange = (e) => { 
    const newBody = e.target.value;
    setBody(newBody);
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
          <input name="url" type="text" value={props.url} onChange={props.handleUrlChange } />
          <button type="submit" disabled={ props.loading }>GO!</button>
          </label>
          <label className="methods">
          <span id="GET" onClick={ props.handleClickMethod }>GET</span>
            <span id="POST" onClick={ props.handleClickMethod }>POST</span>
            <span id="PUT" onClick={ props.handleClickMethod }>PUT</span>
            <span id="DELETE" onClick={ props.handleClickMethod }>DELETE</span>
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
