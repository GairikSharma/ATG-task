import React, { useState } from 'react'
import './mainComponents.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import cardimg3 from './Assets/cardimg3.png'
import cardimg2 from './Assets/cardimg2.png'
import image1 from './Assets/image1.png'
import user2 from './Assets/user2.png';
import { FaPen } from 'react-icons/fa';
import { FiMoreHorizontal } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { BsFillShareFill } from "react-icons/bs";

function CardAtg() {
    const [threedot, setThreedot] = useState(false)
    const threeDot = () => {

        setThreedot(!threedot)

    }
    return (
        <>


            < div className="card mt-5" >
                <img className="card-img-top" src={image1} alt="Card image cap" style={{ height: '220px' }} />
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-around">
                        <FaPen className='pen-icon' />
                        Education
                    </h5>
                    <section className='row d-flex justify-content-end'>
                        <div className="col-md-12">
                            <h3 className="card-text col-sm-10">
                                Tax Benefits for Investment under National Pension Scheme launched by Government
                            </h3>
                        </div>
                        <span className='col-sm-2 threedot'><FiMoreHorizontal onClick={threeDot} /></span>
                    </section>
                </div>
                <section className='row'>
                    <p className='paragraph'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                </section>
                <div className="row">
                    <div className="col-md-8 d-flex user-detail">
                        <img src={user2} className='user mb-2' />
                        <h6 className='mt-1 mx-2 mb-2'>Sharah West</h6>
                    </div>
                    <div className="col-md-2 mt-2">
                        <GrView />1.4k views
                    </div>
                    <div className="col-md-2 mt-2">
                        <BsFillShareFill />
                    </div>
                </div>
            </div >


            < div className="card mt-5" >
                <img className="card-img-top" src={cardimg3} alt="Card image cap" style={{ height: '220px' }} />
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-around">
                        <FaPen className='pen-icon' />
                        Education
                    </h5>
                    <section className='row d-flex justify-content-end'>
                        <div className="col-md-12">
                            <h3 className="card-text col-sm-10">
                                Tax Benefits for Investment under National Pension Scheme launched by Government
                            </h3>
                        </div>
                        <span className='col-sm-2 threedot'><FiMoreHorizontal onClick={threeDot} /></span>
                    </section>
                </div>
                <section className='row'>
                    <p className='paragraph'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                </section>
                <div className="row">
                    <div className="col-md-8 d-flex user-detail">
                        <img src={user2} className='user mb-2' />
                        <h6 className='mt-1 mx-2 mb-2'>Sharah West</h6>
                    </div>
                    <div className="col-md-2 mt-2">
                        <GrView />1.4k views
                    </div>
                    <div className="col-md-2 mt-2">
                        <BsFillShareFill />
                    </div>
                </div>
            </div >



            < div className="card mt-5" >
                <img className="card-img-top" src={cardimg2} alt="Card image cap" style={{ height: '220px' }} />
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-around">
                        <FaPen className='pen-icon' />
                        Education
                    </h5>
                    <section className='row d-flex justify-content-end'>
                        <div className="col-md-12">
                            <h3 className="card-text col-sm-10">
                                Tax Benefits for Investment under National Pension Scheme launched by Government
                            </h3>
                        </div>
                        <span className='col-sm-2 threedot'><FiMoreHorizontal onClick={threeDot} /></span>
                    </section>
                </div>
                <section className='row'>
                    <p className='paragraph'>I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                </section>
                <div className="row">
                    <div className="col-md-8 d-flex user-detail">
                        <img src={user2} className='user mb-2' />
                        <h6 className='mt-1 mx-2 mb-2'>Sharah West</h6>
                    </div>
                    <div className="col-md-2 mt-2">
                        <GrView />1.4k views
                    </div>
                    <div className="col-md-2 mt-2">
                        <BsFillShareFill />
                    </div>
                </div>
            </div >


            {
                threedot && (
                    <div className="threeDot threedot-modal">
                        <div className="threedot-modal-content">
                            Edit
                            Report
                            Option 3
                        </div>
                    </div>
                )
            }

            <div className="edit-pen-icon">
                <FaPen className='pen'/>
            </div>
        </>
    )
}

export default CardAtg


