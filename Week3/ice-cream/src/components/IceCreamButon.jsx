import React from "react";
import "./IceCreamButton.css";

const IceCreamButton = ({ type, children, onClick }) => {
  const buttonClass = `btn-ice ${type}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default IceCreamButton;