import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const coffeeDetailStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  const { coffee, onClickingSellPound } = props;

  return (
    <React.Fragment>
      <div style={coffeeDetailStyles}>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - {coffee.origin}</h3>
      <p><em>Roast: <b>{coffee.roast}</b></em></p>
      <p><em>Price per Pound: ${coffee.price}</em></p>
      <p><em>Pounds Left: <b>{coffee.total}</b></em></p>
      <button onClick={()=> onClickingSellPound(coffee.id) }>Sell Pound</button>
      <hr/>
      </div>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingSellPound: PropTypes.func
};

export default CoffeeDetail;