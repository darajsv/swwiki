import React from "react";
import './selectCard.css'

const SelectCard = (props) => {
    return (
        <div className="selectCard">
            <h3>{props.name}</h3>
        </div>
    );
}
export default SelectCard;