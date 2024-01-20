import React from 'react'
import "./Register1.css"
import StartUp from '../../Components/StartUp'
const RegisterStudent = () => {
  return (
    <div>
      <>

        <div className="register-header">
          <h1 id="heading">Student Registration</h1>
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
                          <input type="text" name="Full name" placeholder="Full name" size="20" required />
                          <label for="email"><b>Email</b></label>
                          <input type="text" placeholder="Enter Email" name="email" required />
                          <label>
                            <label for="USN"><b>USN</b></label>
                          </label>
                          <input type="text" name="phone no" placeholder="Enter USN"
                          />
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
        
        <StartUp/>

      </>
    </div>
  )
}

export default RegisterStudent