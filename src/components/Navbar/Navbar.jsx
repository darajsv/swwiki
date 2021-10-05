import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbarMain'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/planets'>Planets</Link>
        </li>
        <li>
          <Link to='/people'>People</Link>
        </li>
        <li>
          <Link to='/species'>Species</Link>
        </li>
        <li>
          <Link to='/films'>Films</Link>
        </li>
        <li>
          <Link to='/vehicles'>Vehicles</Link>
        </li>
        <li>
          <Link to='/starships'>Starships</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
