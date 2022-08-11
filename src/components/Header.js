import React from "react";
import headerImage from "./../img/Coffee.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Welcome!</h1>
      <img src={headerImage} alt="A photo of a coffee shop." />
    </React.Fragment>
  );
}

export default Header;