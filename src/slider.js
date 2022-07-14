import React from 'react'
import './slider.css'
import hero from './hero.svg'
import heroimage from './Assets/heroimage.png'
import { FaCaretDown, FaUserPlus } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';

function Slider() {
  return (
    <>
      <div className="hero-image">
        <span className='d-flex'>
          <div>
          <AiOutlineArrowLeft className='right-arrow' />
        </div>
        <div>
          <button className='joinGroup'>Join Group</button>
        </div>
        </span>
        <section className="hero-text">

          <h2 style={{ color: 'white' }}>Computer Engineering</h2>
          <p style={{ color: 'white' }}>142,765 Computer Engineers follow this</p>
        </section>
      </div>





      <div className="container">
        <div className="row d-flex">
          <span className='d-flex'>
            <div className="mt-3 mx-3">
              Posts(368)
            </div>
            <div className="justify-content-end mt-2 post-responsive" style={{ width: "100%" }}>
              <button type='button' className='btn btn-secondary filter-responsive'>Filter<FaCaretDown /> </button>
            </div>
          </span>
        </div>
      </div>





      <div className="container links">
        <div className="row">
          <div className="col-md-9">
            <a className='link'>All posts(32)</a>
            <a className='link'>Article</a>
            <a className='link'>Event</a>
            <a className='link'>Education</a>
            <a className='link'>Job</a>
          </div>
          <div className="col-md-3">
            <button type='button' className='btn btn-secondary mx-2 '>Write a post <FaCaretDown /> </button>
            <button type='button' className='btn btn-primary mx-2'> <FaUserPlus /> Join Group</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Slider