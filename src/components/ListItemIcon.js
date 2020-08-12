import React from "react";
import Image from "../assets/bisasam.png";
import "./ListItemIcon.css";
function ListIcon({ src, alt }) {
  return <img className="ListItemIcon" src={src} alt={alt} />;
}
export default ListIcon;
