import React, { useState } from 'react'
import './createAccount.css'
import crt from './crt.svg'
import SignIn from './SingIn'

function CreateAccounModal() {
    const [showsignin , setShowsignin] = useState(false)
    const showSignIn = () => {
        
        setShowsignin(true)
    
    }
    return (
        <>
            {
                showsignin ? (
                    <SignIn />
                ) : (
                    <div className="create-account-modal">
                
                <div className="modal-content">
                    <div className="header-modal">
                        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className='mx-3 mt-3'>Create Account</h3>
                                <form className='mx-3 mt-3'>
                                    <section className='d-flex ' style={{ width: "320px", height: "40px" }}>
                                        <input type="text" className='form-control fname' placeholder='First Name' />
                                        <input type="text" className='form-control lname' placeholder='Last Name' />
                                    </section>
                                    <input type="email" className='form-control' placeholder='Email' style={{ width: "320px", height: "40px" }} />
                                    <input type="password" className='form-control' placeholder='Password' style={{ width: "320px", height: "40px" }} />
                                    <input type="email" className='form-control' placeholder='Confirm Password' style={{ width: "320px", height: "40px" }} />

                                    <button type='button' className='btn btn-primary create-account-btn mt-4'>Create Account</button>
                                    <button type='button' className='btn btn-secondary sign-up-facebook mt-4' style={{ width: "320px", height: "40px" }}>Sign up with Facebook</button>
                                    <button type='button' className='btn btn-secondary sign-up-google mt-4' style={{ width: "320px", height: "40px" }}>Sign up with Google</button>
                                </form>

                            </div>
                            <div className="col-md-6 mt-3">
                                <span className='d-flex mt-1'>
                                    Already have an account? <a style={{ textDecoration: 'none', color: 'blue' }} onClick={showSignIn}>Sign In</a>
                                </span>
                                <div>
                                    <img src={crt} className='svg'/>
                                </div>
                                <div style={{ fontSize: "11px", height: "16px", marginBottom:"-2%"}}>
                                    By signing up, you agree to our Terms & conditions, Privacy policy
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )
            }
            
            
        </>
    )
}

export default CreateAccounModal