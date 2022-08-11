import React from "react";

function Coffee(props){
  return (
    <React.Fragment>
      <h3>{props.name} - {props.origin}</h3>
      <p><em>{props.roast}</em></p>
      <p><em>{props.price}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Coffee;