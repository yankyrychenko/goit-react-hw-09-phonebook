import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import style from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = useCallback(
    ({ target }) => {
      setInputValues({ ...inputValues, [target.name]: target.value });
    },
    [inputValues],
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(authOperations.logIn(inputValues));

      setInputValues({ name: '', password: '' });
    },
    [dispatch, inputValues],
  );

  return (
    <div>
      <h1>Log In</h1>

      <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
        <label className={style.label}>
          Email
          <input type="email" name="email" value={inputValues.email} onChange={handleChange} />
        </label>

        <label className={style.label}>
          Password
          <input type="password" name="password" value={inputValues.password} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
