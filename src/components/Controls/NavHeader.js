import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavHeader() {
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
          <li>
            <NavLink to="/dogs/new">
              Admin
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
}
