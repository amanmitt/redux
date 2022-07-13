import React from "react";
import "./Home.css";

const Header = (props) => {
  return (
    <div className="header">
      <span>Cart {props.dataReducer.cartItems.length}</span>
    </div>
  );
};

export default Header;
