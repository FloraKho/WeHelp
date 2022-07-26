
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import SearchBar from './SearchBar';
import logo from './logo.png'

const NavBar = ({businesses}) => {
  
  const sessionUser = useSelector(state => state.session.user)
  
  let sessionLinks;
  if(sessionUser){
    sessionLinks=(
      <nav className='navi-bar-container'>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img src={logo} alt='logo' width="100px" height="30px">
          </img>
        </NavLink>
        <SearchBar businesses={businesses} />
        <NavLink to='/businesses' exact={true} activeClassName='active'>
          Restuarants
        </NavLink>
        <NavLink to='/post-business' exact={true} activeClassName='active'>
          New Business
        </NavLink>
        <LogoutButton />
      </nav>
    )
  }else{
    sessionLinks = (
      <nav className='navi-bar-container'>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
            <SearchBar businesses={businesses} />
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
            <NavLink to='/businesses' exact={true} activeClassName='active'>
              Restuarants
            </NavLink>
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
