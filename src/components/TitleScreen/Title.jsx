import React from 'react'
import './title.css'
import Card from './TitlePageCard/Card.jsx'
import images from '../../assets/img/titleScreenImg/deathStar.jpg'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div className='titleMain'>
      <div>
        <h1>SWWIKI</h1>
        <h3>A Star Wars Wiki</h3>
        <h5 className='titleDescription'>
          integrated with <a href='https://swapi-trybe.herokuapp.com/'>swapi</a>
        </h5>
      </div>
      <div className='cardSection'>
        <Link to='/planets'>
          <Card img={images} alt='my image' title='Planets' />
        </Link>
        <Link to='/people'>
          <Card img={images} alt='my image' title='People' />
        </Link>
        <Link to='/species'>
          <Card img={images} alt='my image' title='Species' />
        </Link>
        <Link to='/films'>
          <Card img={images} alt='my image' title='Films' />
        </Link>
        <Link to='/vehicles'>
          <Card img={images} alt='my image' title='Vehicles' />
        </Link>
        <Link to='/starships'>
          <Card img={images} alt='my image' title='Starships' />
        </Link>
      </div>
    </div>
  )
}

export default Title
