import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
export const Header = () => {
  return (
    <>
      <div >
        <nav className="navbar navbar-expand-md sticky-top bg-light navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand d-md-none " to="/"><img src="/bigf.png"
              style={{ height: '69px' }}
              alt="Logo" /></Link><button data-bs-toggle="collapse"
                className="navbar-toggler  "
                data-bs-target="#navcol-1">
              <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
            </button>
            <div className='d-flex justify-content-start'>  <Link to='/' className="navbar-brand d-none d-md-block me-0"><img
              src="/bigf.png"
              style={{ height: '69px' }}
              alt="Logo"
            /></Link></div>
            <div className="collapse  navbar-collapse " id="navcol-1">
              <ul className="navbar-nav d-flex justify-content-end mx-auto my-auto w-100">

                <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/">&nbsp;<b>Home</b></Link>
                </li>
                <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/team"
                  >&nbsp;<b>About</b></Link>
                </li>
                <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/team"
                  >&nbsp;<b>Events</b></Link>
                </li>
                <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/launchpad">&nbsp;<b>Facilities</b></Link>
                </li>
                <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/">&nbsp;<b>Blogs</b></Link>
                </li>
                <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/launchpad">&nbsp;<b>Startup Launchpad </b></Link>
                </li>
                {/* <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/devWing">&nbsp;<b>Devwing</b></Link>
                </li> */}
                <li style={{ paddingRight: '12px' }} className="nav-item pb-2 pb-md-0">
                  <Link className="nav-link text-nowrap text-center" to="/contact">&nbsp;<b>Contact</b></Link>
                </li>
                <li  style={{ paddingRight: '12px' ,backgroundColor:'#5935f7'}} className="nav-item dropdown rounded">
                  <Link  style={{color:'white'}} className="nav-link " to="/register">&nbsp;<b>Register</b></Link>
                  <div style={{right:'0'}} className="dropdown-menu position-absolute"  aria-labelledby="navbarDropdown">

                  <Link className="dropdown-item "    to="/register">Students</Link>
                  <Link className="dropdown-item "    to="/register">Alumini</Link>
                  <Link className="dropdown-item "   to="/register">Faculty</Link>
                  <Link className="dropdown-item "   to="/register">Company/Industry</Link>
                  <Link className="dropdown-item "   to="/register">StartUp</Link>
                </div>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
export default Header;
