import React from 'react'
import "./Register1.css"


const RegisterStartup = () => {
    return (
        <div>
            <>

                <div className="register-header">
                    <h1 id="heading">Startup Registeration</h1>
                    <p>Register with us and we shall get back to you shortly</p>
                </div>
                <section className='register'>
                    <div className="main-content">
                        {/*----Right Section----*/}
                        <section className='register-form'>
                            <div className="container-fluid">
                                <div className="row justify-content-center">
                                    <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5  p-0 mt-3 mb-2">
                                        <div className="form">
                                            <div className="px-0 pt-4 pb-0 mt-3 mb-3">

                                                <form />
                                                <div className="container">
                                                    <hr />
                                                    <label for="first name"><b>Full name</b></label>
                                                    <input type="text" name="Full name" placeholder="Full name" size="15" required />
                                                    <label for="email"><b>Email</b></label>
                                                    <input type="text" placeholder="Enter Email" name="email" required />
                                                    <label>
                                                        <label for="Phone no."><b>Mobile no.</b></label>
                                                    </label>
                                                    <input type="text" name="phone no" placeholder="Mobile no."
                                                        value="+91" size="2" />
                                                    <label for="query"><b>Any Query</b></label>
                                                    <textarea cols="80" rows="5" placeholder="query" value="query" name="query"
                                                    >
                                                    </textarea>
                                                    <button type="submit" className="registerbtn pageclip-form__submit">Register</button>
                                                    <form>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*----Left Section----*/}
                        <section className='register-image'>
                            <img src="\bigf.png" alt='logo' />
                        </section>
                    </div>
                </section>


            </>
        </div>
    )
}

export default RegisterStartup