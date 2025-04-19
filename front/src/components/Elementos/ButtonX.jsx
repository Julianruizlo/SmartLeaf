import React from "react";
import "../../App.css";

function ButtonX({ text, onClick, type = "button" }) {
  return (
    <button className="login-button" onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default ButtonX;