import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts.slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  function filterContact() {
    if (filter.length > 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    }
    return contacts;
  }

  return (
    <ul contacts={filterContact()}>
      {contacts.map(contact => (
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
