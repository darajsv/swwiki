import React from "react";
import "./card.css";
const Card = (props) => {
  return (
    <div className="titleCards">
      <div className="imageSection">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="textSection">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Card;
