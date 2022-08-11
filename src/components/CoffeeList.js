import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

const mainCoffeeList = [
  {
    name: "Stump Town",
    origin: "Portland",
    roast: "dark",
    price: "$20.00"
  },
  {
    name: "Starbucks",
    origin: "Seattle",
    roast: "light",
    price: "$10.00"
  },
  {
    name: "Peace",
    origin: "Minneapolis",
    roast: "light",
    price: "$15.00"
  }
];

function CoffeeList(){
  return (
    <React.Fragment>
      <hr/>
      {mainCoffeeList.map((coffee, index) =>
        <Coffee name={coffee.name}
          origin={coffee.origin}
          roast={coffee.roast}
          price={coffee.price}
          key={index}/>      
      )}
    </React.Fragment>
  );
}

export default CoffeeList;