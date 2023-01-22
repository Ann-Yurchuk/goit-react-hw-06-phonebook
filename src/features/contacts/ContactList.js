import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts.slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.contacts);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const filterContacts = filteredContacts(contacts, filter);

  return (
    <ul>
      {filterContacts.map(contact => (
        <li key={contact.id}>
          <div>
            <p> {contact.name}</p>
            <p>{contact.number}</p>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
