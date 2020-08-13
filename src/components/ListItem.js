import React from "react";
import "./ListItem.css";

function ListItem({ href, children }) {
  return (
    <a href={href} className="listItem">
      {children}
    </a>
  );
}
export default ListItem;
