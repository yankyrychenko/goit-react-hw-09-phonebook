import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

const ContactsView = () => (
  <>
    <ContactForm />
    <Filter />
    <ContactList />
  </>
);

export default ContactsView;
