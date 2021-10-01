import React from "react";
import "./selectCard.css";
import { useHistory } from "react-router";
const SelectCard = (props) => {
  
  let history = useHistory();
 
  function handleRoutePush (id) {
      history.push(`/${id}`);
    }

  return (
    <div key={props.key} onClick={() => handleRoutePush(props.id)} className="selectCard">
      <h3>{props.name}</h3>
    </div>
  );
};
export default SelectCard;
