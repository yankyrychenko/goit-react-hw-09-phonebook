import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts/';
import style from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(contactsSelectors.getFilter);

  const onChange = useCallback(
    ({ target }) => {
      dispatch(contactsActions.findContact(target.value));
    },
    [dispatch],
  );

  return (
    <>
      <h2>Contacts</h2>
      <label className={style.filter}>
        Find contacts by name
        <input
          className={style.input}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}
