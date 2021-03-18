import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import style from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const email = useSelector(authSelectors.getUsername);

  const onLogOut = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <span className={style.name}>Welcome, {email}</span>
      <button type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
}
