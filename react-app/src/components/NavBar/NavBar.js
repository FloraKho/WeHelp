
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import SearchBar from './SearchBar';
import logo from './logo.png'

const NavBar = ({ businesses }) => {

  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <nav className='navi-bar-container'>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img id="logo" src={logo} alt='logo' width="100px" height="30px"></img>
        </NavLink>
        <SearchBar businesses={businesses} />
        <div className='navi-bar-right'>
        <div className='navi-bar-right-buttons'>
          <NavLink to='/businesses' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'black' }}>
            Restuarants
          </NavLink>
        </div>
        <div className='navi-bar-right-buttons'>
          <NavLink to='/post-business' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'black' }}>
            New Business
          </NavLink>
        </div>
          <LogoutButton />
        </div>
      </nav>
    )
  } else {
    sessionLinks = (
      <nav className='navi-bar-container'>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img id="logo" src={logo} alt='logo' width="100px" height="30px"></img>
        </NavLink>
        <SearchBar businesses={businesses} />
        <div className='navi-bar-right'>
          <div className='navi-bar-right-buttons'>
            <NavLink to='/login' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'black' }}>
              Login
            </NavLink>
          </div>
          <div className='navi-bar-right-buttons'>
            <NavLink to='/sign-up' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'black' }}>
              Sign Up
            </NavLink>
          </div>
          <div className='navi-bar-right-buttons'>
            <NavLink to='/businesses' exact={true} activeClassName='active' style={{ textDecoration: 'none', color: 'black' }}>
              Restuarants
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <div >
      {sessionLinks}
    </div>
  );
}

export default NavBar;
