import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import api from '../../../services/api.js'
import './individualPlanet.css'

const IndividualPlanet = () => {
  const params = useParams()
  const [data, setData] = useState([])
  let history = useHistory()

  const toggleRandomPlanet = () => {
    let randomId = Math.floor(Math.random() * 61)
    history.replace(`/planets/${randomId}`)
  }
  useEffect(() => {
    api
      .get(`/planets/${params.planetId}/`)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [params.planetId, setData])

  return (
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
      <div className='buttonSection'>
        <button type='button' onClick={toggleRandomPlanet}>
          Transport to a random Planet
        </button>
      </div>
    </div>
  )
}

export default IndividualPlanet
