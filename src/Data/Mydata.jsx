import "./card.css";

function Mydata(props) {

  return (
    <>
      <div className="card">
        <div >
          <h3>Product name :- {props.ProductName}</h3>
          <h5>Product Price :- {props.price}</h5>
          <p>Product Rating :- {props.rating}</p>
        </div>
      </div>
    </>
  );
}

export default Mydata;
