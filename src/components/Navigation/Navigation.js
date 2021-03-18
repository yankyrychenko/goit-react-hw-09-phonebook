import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import style from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={style.link}
        activeClassName={style.activeLink}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
