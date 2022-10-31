import HistoryItem from "./history-item";
import './history.scss';

function History(props) {
  return ( 
    <section>
      <h2>History:</h2>
      {props.history.map((h, idx) => (<HistoryItem key={idx} {...h} />))}
    </section> 
  );
}

export default History;