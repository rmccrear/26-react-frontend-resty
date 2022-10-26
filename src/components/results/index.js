import React from 'react';

function Results(props) {
  return (
    <section>
      <div>Status: { props?.data?.status }</div>
      <hr/>
      <div>Headers:</div>
      <pre>
        {props.data?.headers ? JSON.stringify(props.data.headers, undefined, 2) : null}
      </pre>
      <hr/>
      <div>Data:</div>
      <pre role="code">{props.data?.data ? JSON.stringify(props.data.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
