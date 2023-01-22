import { ContactsPage } from 'features/contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Section } from './Section/Section';
import { Layout } from './Layout/Layout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <ContactsPage />
      </Section>
      <ToastContainer autoClose={3000} />
    </Layout>
  );
}

export default App;
