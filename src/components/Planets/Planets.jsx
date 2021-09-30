import React from "react";
import "./planets.css";
import planetImg from "../../assets/img/planets.png";
import SelectCard from './planetSelectCard/SelectCard.jsx'
const Planets = () => {
  return (
    <div className="planetsMain">
      <div className="planetImg">
        <img src={planetImg} alt="tatooine" />
      </div>
      <div className="content">
        <div className="header">
          <div className="titleSection">
            <h1>Planets</h1>
          </div>
          <div className="description">
            <h3>Discover Planets of the Galaxy</h3>
            <h3>Click on a Planet name to begin</h3>
          </div>
        </div>
        <div className='cards'>
            <SelectCard name='planet big big big Name'/>
        </div>
      </div>
    </div>
  );
};
export default Planets;
