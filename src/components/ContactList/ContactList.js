import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import style from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = useCallback(
    id => dispatch(contactsOperations.deleteContact(id)),
    [dispatch],
  );

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={style.item} key={id}>
          {name}: {number}
          <button
            type="button"
            className={style.btn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
