import React from "react";

function Coffee(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.origin}</h3>
      <p><em>Roast: <b>{props.roast}</b></em></p>
      <p><em>Price per Pound: ${props.price}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Coffee;