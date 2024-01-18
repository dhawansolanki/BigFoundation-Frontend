import React from 'react'
import { Link } from 'react-router-dom';
import '../../utils/global.css';
import '../../utils/team.css';
export const Header = () => {
  return (
    <>
    <div >
      <nav className="navbar navbar-expand-md sticky-top bg-light navbar-light">
              <div className="container-fluid">
                <Link className="navbar-brand d-md-none" to="/"><img src="/bigf.png"
                    style={{height:'69px'}}
                    alt="Logo" /></Link><button data-bs-toggle="collapse"
                  className="navbar-toggler"
                  data-bs-target="#navcol-1">
                  <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-md-flex" id="navcol-1">
                  <ul className="navbar-nav d-flex justify-content-evenly mx-auto w-100">
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/"><i className="fas fa-home"></i>&nbsp;Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/team"
                      ><i className="fas fa-fire"></i>&nbsp;Team</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/launchpad"><i className="fas fa-chart-bar"></i>&nbsp;Launch Pad</Link>
                    </li>
                  </ul>
                  <Link to='/' className="navbar-brand d-none d-md-block me-0"><img
                      src="/bigf.png"
                      style={{height:'69px',width:'199px'}}
                      alt="Logo"
                    /></Link>
                  <ul className="navbar-nav d-flex justify-content-evenly mx-auto w-100">
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/register"><i className="fas fa-cloud-download-alt"></i>&nbsp; Register</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-center" to="/devWing"><i className="fas fa-info-circle"></i>&nbsp;Devwing</Link>
                    </li>
                    <li className="nav-item pb-2 pb-md-0">
                      <Link className="nav-link text-nowrap text-center" to="/contact"><i className="fas fa-at"></i>&nbsp;Contact</Link>
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