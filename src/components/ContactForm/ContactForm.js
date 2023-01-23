import { Forma } from './ContactForm.styled';
import { CreateContact } from 'features/contacts/CreateContact';

export const ContactForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Forma onSubmit={handleSubmit}>
      <CreateContact />
    </Forma>
  );
};
