import React from 'react'
import './SignIn.css'
import crt from './crt.svg'

function SignIn() {
    return (
        <>
            <div className="create-account-modal">

                <div className="modal-content">
                    <div className="header-modal">
                        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                    </div>
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-6 ">
                                <h3 className='mx-3 mt-3'>Sign In</h3>
                                <form className='mx-3 mt-3'>
                                    
                                    <input type="email" className='form-control' placeholder='Email' style={{ width: "320px", height: "40px" }} />
                                    <input type="password" className='form-control' placeholder='Password' style={{ width: "320px", height: "40px" }} />

                                    <button type='button' className='btn btn-primary create-account-btn mt-4'>Sign In</button>
                                    <button type='button' className='btn btn-secondary sign-up-facebook mt-1' style={{ width: "320px", height: "40px" }}>Sign up with Facebook</button>
                                    <button type='button' className='btn btn-secondary sign-up-google mt-1' style={{ width: "320px", height: "40px" }}>Sign up with Google</button>
                                    <a type='button' className='btn btn-secondary sign-up-google mt-2' style={{ width: "320px", height: "40px" }}>Forgot Password?</a>
                                </form>

                            </div>
                            <div className="col-md-6">
                                <span className='d-flex mt-3'>
                                    Don’t have an account yet? <a style={{ textDecoration: 'none', color: 'blue' }}>Create new for free!</a>
                                </span>
                                <div>
                                    <img src={crt} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn