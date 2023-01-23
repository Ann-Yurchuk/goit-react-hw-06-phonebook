import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { InputPhone, Button } from './Contacts.styled';
import { addContact } from '../../redux/contacts.slice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreateContact = () => {
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.contacts);

  const onAddNewContact = () => {
    if (!newUserName || !number) {
      return toast('Please fill in all fields');
    }
    if (contacts.find(elem => elem.name === newUserName)) {
      alert(`${newUserName} is already in contacts`);
      setNewUserName('');
      setNumber('');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: newUserName,
      number: number,
    };
    dispatch(addContact(newContact));
    setNewUserName('');
    setNumber('');
  };

  return (
    <>
      <InputPhone
        placeholder="Enter name of your contact"
        value={newUserName}
        type="text"
        onChange={e => setNewUserName(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <InputPhone
        placeholder="Enter number of your contact"
        value={number}
        type="tel"
        onChange={e => setNumber(e.target.value)}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit" onClick={onAddNewContact}>
        Add contact
      </Button>
    </>
  );
};
