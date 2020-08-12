import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <a href={props.href} className="listItem">
      {props.children}
    </a>
  );
}
export default ListItem;
