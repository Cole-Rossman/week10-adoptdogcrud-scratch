import React from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../services/users';

export default function NavHeader({ currentUser, setCurrentUser }) {
  const handleLogout = async () => {
    await logout();
    setCurrentUser(null);
  };



  return (
    <div className='nav-header'>
      <ul>
        <div>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
        </div>
        <div>
          {!currentUser && (
            <li>
              <NavLink to="/auth">Sign In</NavLink>
            </li>
          )}
        </div>
        <div>
          {currentUser && (
            <li>
              <NavLink to="/dogs/new">Admin</NavLink>
            </li>
          )}
        </div>
      </ul>
      {currentUser && (
        <ul>
          <li>
            <p>User: {currentUser}</p>
          </li>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </ul>
      )}
    </div>
  );
}
