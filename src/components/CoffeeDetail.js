import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingSellPound } = props;

  return (
    <React.Fragment>
      
      <h1>Coffee Information</h1>
      <h3>{coffee.name} - {coffee.origin}</h3>
      <p><em>Roast: <b>{coffee.roast}</b></em></p>
      <p><em>Price per Pound: ${coffee.price}</em></p>
      <p><em>Pounds Left: <b>{coffee.total}</b></em></p>
      <button onClick={()=> onClickingSellPound(coffee.id) }>Sell Pound</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingSellPound: PropTypes.func
};

export default CoffeeDetail;