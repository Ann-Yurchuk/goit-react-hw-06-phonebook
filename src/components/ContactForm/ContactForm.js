import { useDispatch, useSelector } from 'react-redux';
import { Forma } from './ContactForm.styled';
import { CreateContact } from 'features/contacts/CreateContact';
import { addContact } from '../../redux/contacts.slice';

function ContactForm() {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(contacts));
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <CreateContact />
    </Forma>
  );
}

export default ContactForm;
