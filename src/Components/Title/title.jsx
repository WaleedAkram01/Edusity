import React from "react";
import "./title.css";
function title(props) {
  return (
    <div className="title container">
      <p>{props.subtitle}</p>
      <h3>{props.title} </h3>
    </div>
  );
}
export default title;
