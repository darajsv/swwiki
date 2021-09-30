import React from "react";
import "./title.css";
import Card from "./TitlePageCard/Card.jsx";
import images from "../../assets/img/titleScreenImg/deathStar.jpg";

const Title = () => {
  return (
    <div className="titleMain">
      <div>
        <h1>SWWIKI</h1>
        <h3>A Star Wars Wiki</h3>
        <h5>
          integrated with <a href="https://swapi-trybe.herokuapp.com/">swapi</a>
        </h5>
      </div>
      <div className="cardSection">
        <Card img={images} alt="my image" title="Planets" />
        <Card img={images} alt="my image" title="People" />
        <Card img={images} alt="my image" title="Species" />
        <Card img={images} alt="my image" title="Films" />
        <Card img={images} alt="my image" title="Vehicles" />
        <Card img={images} alt="my image" title="Starships" />
      </div>
    </div>
  );
};

export default Title;
