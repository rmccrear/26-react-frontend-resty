import {useState} from 'react';
import Results from "../results";

function IsOpenIndicator(props) {
  return (
    <span className='is-open-indicator'>
      {props.open ? '▾' : '▸'}
    </span>
  );
}

function HistoryItem (props) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div className="history-item">
      <div onClick={handleClick}> <IsOpenIndicator open={open}/>
       <span>{ props.method } </span>
       <span>{ props.url }</span>
       </div>
      { open ?
        <Results data={ props.result } />
        : <div></div>
      }
    </div>
  );
}

export default HistoryItem;