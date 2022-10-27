import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './results.scss';

function Results(props) {
  return (
    <section>
      <div>Status: { props?.data?.status }</div>
      <hr/>
      <div>Headers:</div>
      <SyntaxHighlighter role="code" language="javascript" >
        {props.data?.headers ? JSON.stringify(props.data.headers, undefined, 2) : null}
      </SyntaxHighlighter>
      <hr/>
      <div>Data:</div>
      <SyntaxHighlighter role="code" language="javascript" >
        {props.data?.data ? JSON.stringify(props.data.data, undefined, 2) : null}
      </SyntaxHighlighter>
    </section>
  );
}

export default Results;
