import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";


function CoffeeList(props){
  return (
    <React.Fragment>
      <hr/>
      <h2>Roast Coffee Shop's Available Beans:</h2>
      <hr/>
      {props.coffeeList.map((coffee) =>
        <Coffee 
          whenCoffeeClicked = { props.onCoffeeSelection }
          name={coffee.name}
          origin={coffee.origin}
          roast={coffee.roast}
          price={coffee.price}
          total={coffee.total}
          id={coffee.id}
          key={coffee.id}/>      
      )}
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;