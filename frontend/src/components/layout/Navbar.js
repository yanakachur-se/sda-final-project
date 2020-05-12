import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

function Navbar({ onLogout }) {
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light sticky-top'>
      <a className='navbar-brand' href='#'>
        <img
          src={require(`../../assets/logo1.png`)}
          width={64}
          height={64}
          alt='Logo'
        />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor01'
        aria-controls='navbarColor01'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarColor01'>
        <ul className='navbar-nav m-auto'>
          <li className='nav-item'>
            <Link className='nav-link text-warning text-uppercase' to='/'>
              home&nbsp;<i className='fas fa-home'></i>{' '}
              <span className='sr-only'>(current)</span>
            </Link>
          </li>

          <li className='nav-item'>
            <NavDropdown title='SERVICES' id='basic-nav-dropdown'>
              <NavDropdown.Item href='/service?service=groupTraining'>Group Training</NavDropdown.Item>
              <NavDropdown.Item href='/service?service=groupRun'>Group Run</NavDropdown.Item>
              <NavDropdown.Item href='/service?service=meditation'>Meditation</NavDropdown.Item>
              <NavDropdown.Item href='/service?service=soccer'>Soccer</NavDropdown.Item>
              <NavDropdown.Item href='/service?service=Outdoor Yoga'>Outdoor Yoga</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/service?service=all'>All Services</NavDropdown.Item>
            </NavDropdown>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link text-warning text-uppercase'
              to='/posts'>
              Service Posts
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link text-warning text-uppercase' to='/chat'>
              chat
            </Link>
          </li>
          <li className='nav-item'>
            <Link 
              className='nav-link text-warning text-uppercase'
              to='/covid19live'>
             Covid19Live
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-warning text-uppercase' to='/contactus'>
              Contact Us
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link text-warning text-uppercase' to='/profile'>Profile</Link>

          </li>

          <li className='nav-item'>
            <Link
              className='nav-link text-warning text-uppercase'
              to='/serviceform'>
              Service Form
            </Link>
          </li>
        </ul>

        <button
          className='btn btn-outline-warning my-2 my-sm-0'
          onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
