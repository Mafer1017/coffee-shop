import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>{props.name} - {props.origin}</h3>
      <p><em>Roast: <b>{props.roast}</b></em></p>
      <p><em>Price per Pound: ${props.price}</em></p>
      <p><em>Pounds Left: <b>{props.total}</b></em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.string,
  total: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;