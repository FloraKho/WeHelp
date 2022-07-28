import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import LogoutButton from '../auth/LogoutButton';
import { NavLink, useHistory } from 'react-router-dom';

const ProfileBtn = () => {
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();
    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };
    
    useEffect(() => {
      if (!showMenu) return;
  
      const closeMenu = () => {
        setShowMenu(false);
      };
  
      document.addEventListener('click', closeMenu);
    
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    return(
        <>  
            <div onClick={openMenu}>
            <img 
                style={{width:'40px', height:'40px', borderRadius:'50px'}} 
                src={sessionUser?.profile_pic } 
                alt={sessionUser?.username} 
                />
            </div>
            {showMenu && (
                <div className="profile-drop-down-menu">
                    <NavLink style={{ textDecoration: 'none', color: 'black', textAlign:'center'}} to={`/profile`}>Profile</NavLink>
                    <hr></hr>
                    <LogoutButton />
                </div>
            )}
        </>
    )



};

export default ProfileBtn;
