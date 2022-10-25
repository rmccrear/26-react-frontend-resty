import React from 'react';

function Results(props) {
  return (
    <section>
      <pre role="code">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
