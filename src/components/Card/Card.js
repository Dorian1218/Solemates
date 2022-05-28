import "./Cards.css";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.shoeName}</h1>
      <img src={props.img} width="200px" alt="Shoe"></img>
      <h2>Lowest Ask</h2>
      <h1>{props.price}</h1>
    </div>
  );
}
