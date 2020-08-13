import React from "react";

function ApiButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export default ApiButton;
