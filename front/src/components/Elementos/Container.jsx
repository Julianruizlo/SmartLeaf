import React from "react";
import "../../App.css";

function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default Container;