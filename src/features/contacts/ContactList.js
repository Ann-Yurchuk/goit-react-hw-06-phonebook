import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts.slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const  filter  = useSelector(state => state.filter);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });

  if (filterContacts.length === 0 && !filter) {
    return <p> There are no contacts.</p>;
  }
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
