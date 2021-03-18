import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import style from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    name: '',
    number: '',
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

      dispatch(contactsOperations.addContact(inputValues));
    },
    [dispatch, inputValues],
  );

  return (
    <>
      <h1>Phonebook</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={style.input}
            autoComplete="off"
            type="text"
            name="name"
            value={inputValues.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number
          <input
            className={style.input}
            autoComplete="off"
            type="text"
            name="number"
            value={inputValues.number}
            onChange={handleChange}
          />
        </label>
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
}
