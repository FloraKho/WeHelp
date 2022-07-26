
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
          <NavLink to='/businesses' exact={true} activeClassName='active'>
            All Buisnesses
          </NavLink>
          <NavLink to='/post-business' exact={true} activeClassName='active'>
            New Business
          </NavLink>
          <LogoutButton />
    </nav>
  );
}

export default NavBar;
