import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Forma } from './ContactForm.styled';
import { CreateContact } from 'features/contacts/CreateContact';
import { addContact } from '../../redux/contacts.slice';

export const ContactForm = () => {
  const [setNewUserName] = useState('');
  const [setNumber] = useState('');
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(contacts));
    setNewUserName('');
    setNumber('');
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <CreateContact />
    </Forma>
  );
};
