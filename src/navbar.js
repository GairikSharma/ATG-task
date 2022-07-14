import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'
import CreateAccounModal from './createAccount';
import { FaCaretDown, FaSistrix } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './navbar.css'

function Navbar() {
    const [showmodal, setShowmodal] = useState(false)
    const showModal = () => {
        setShowmodal(true)
    }
    const closeModal = (e) => {
        setShowmodal(false)
        console.log(e);
        console.log('clicked');
    }
    return (
        <>
            {
                showmodal && (
                    <div>
                        <div onClick={()=>{console.log('working');}}>
                            <AiOutlineCloseCircle style={{ position: "absolute", right: "22rem", top: "4rem" ,color:'white' ,height:'40px',width:'40px',zIndex:'100'}} />
                        </div>
                        {/* <button style={{ position: "absolute", right: "8rem", top: "6rem" , height:'40px',width:'40px' , borderRadius:'50%' , backgroundColor:'white'}} onClick={closeModal}>x</button> */}
                        <CreateAccounModal  style={{zIndex:"1"}}/>
                    </div>
                )
            }

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid d-flex justify-content-end">
                            <a className="navbar-brand mx-5 col-md-4"><span style={{ color: 'green' }}>ATG.</span>W<img className='logo_atg' src={logo} />RLD</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <form className="d-flex col-md-4">
                                    <input className="form-control search-bar me-2" type="search" placeholder="Search" aria-label="Search" />

                                </form>
                                <div className='crt-acc'>
                                    <a className='top-right d-flex justify-content-end ms-5' onClick={showModal}>Create account.<span style={{ color: 'blue' }}>It's free!</span><FaCaretDown /></a>
                                </div>
                            </div>
                        </div>
                    </nav>
            
        </>
    )
}

export default Navbar