
function HistoryItem (props) {
  return (
    <div className="history-item">
      <div>{ props.url }</div>
    </div>
  );
}

function History(props) {
  return ( 
    <div>
      {props.history.map((h, idx) => (<HistoryItem key={idx} {...h} />))}
    </div> 
  );
}

export default History;