import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
export const Header = () => {
  const closeDropdown = () => {
    const navbarToggler = document.getElementById('navbarToggler');
    if (navbarToggler) {
      navbarToggler.click();
    }
  };
  return (    
    <>
       <div>
        <nav className="navbar navbar-expand-md sticky-top bg-light navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="/bigf.png" style={{ height: '69px' }} alt="Logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navcol-1"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav ms-auto">

                <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/">&nbsp;<b>Home</b></Link>
                </li>
                <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/team"
                  >&nbsp;<b>About</b></Link>
                </li>
                <li style={{ paddingRight: '12px' }} className="nav-item">
                  <Link className="nav-link text-center" to="/events"
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
                <li style={{ paddingRight: '12px', backgroundColor: '#5935f7' }} className="nav-item dropdown rounded">
                  <button style={{ color: 'white' , right: '0', maxWidth: '200px'}} onClick={closeDropdown} className="nav-link ">&nbsp;<b>Register</b></button>
                  <div style={{ right: '0', maxWidth: '200px' }} className="dropdown-menu position-absolute dropdown-menu-end" aria-labelledby="navbarDropdown">

                    <Link onClick={closeDropdown} className="dropdown-item text-nowrap" to="/register">Students</Link>
                    <Link onClick={closeDropdown} className="dropdown-item text-nowrap" to="/register">Alumini</Link>
                    <Link onClick={closeDropdown} className="dropdown-item text-nowrap" to="/register">Faculty</Link>
                    <Link onClick={closeDropdown} className="dropdown-item text-nowrap" to="/register">Company/Industry</Link>
                    <Link onClick={closeDropdown} className="dropdown-item text-nowrap" to="/register">StartUp</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
