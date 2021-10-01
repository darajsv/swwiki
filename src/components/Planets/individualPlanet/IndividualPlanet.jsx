import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from '../../../services/api.js'
import './individualPlanet.css'

const IndividualPlanet = () => {
    let params = useParams();
    let [data, setData] = useState([]);
    
    useEffect(() => {
        api.get(`/planets/${params.planetId}`).then((response) => {
            setData(response.data);
        }).catch((err) => {
            console.error(err);
        }, [])
    })

        return(
            <div className='individualPlanet'>
               <div className='planetName'>
                   <h1>{data.name}</h1>
               </div>
               <div className='informationCard'>
                   <h5> Rotation Period: {data.rotation_period} </h5>
                   <h5> Oribital Period: {data.orbital_period} </h5>
                   <h5> Diameter: {data.diameter} </h5>
                   <h5> Climate: {data.climate} </h5>
                   <h5> Gravity: {data.gravity} </h5>
                   <h5> Terrain: {data.terrain} </h5>
                   <h5> Surface Water: {data.surface_water} </h5>
                   <h5> Population: {data.population}</h5>
               </div>
            </div>
        )
    
}

export default IndividualPlanet;