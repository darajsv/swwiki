import React from 'react'
import './selectCard.css'
import { useHistory } from 'react-router'

const SelectCard = (props) => {
  let history = useHistory()

  function handleRoutePush(_id) {
    history.push(`/planets/${_id}/`)
  }

  return (
    <div onClick={() => handleRoutePush(props.id)} className='selectCard'>
      <h3>{props.name}</h3>
    </div>
  )
}
export default SelectCard
