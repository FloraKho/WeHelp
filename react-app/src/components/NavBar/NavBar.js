
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'
import SearchBar from './SearchBar';

const NavBar = ({businesses}) => {
  
  const sessionUser = useSelector(state => state.session.user)
  
  let sessionLinks;
  if(sessionUser){
    sessionLinks=(
      <nav>
        <NavLink to='/' exact={true} activeClassName='active'>
          Home
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
      <nav>
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
    <div className='navi-bar-container'>
      {sessionLinks}
    </div>
  );
}

export default NavBar;
