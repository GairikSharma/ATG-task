import React from 'react'
import './allCards.css'
import CardAtg from './mainComponents'
import { GrLocation } from "react-icons/gr";
import { FaPen } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi'

function AllCards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <CardAtg />
        </div>
        <div className="col-md-4 mt-5 location">
          <GrLocation className='mx-4 mt-1' />
          Noida, India
          <FaPen className='edit-location mx-5 mt-1 edit' />
          <hr />
          <br />
          <div>
            <BiErrorCircle />
            Your location will help us serve better
            and extend a personalised experience.
          </div>
        </div>

      </div>
    </div>
  )
}

export default AllCards