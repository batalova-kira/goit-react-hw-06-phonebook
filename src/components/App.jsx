// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import Contactlist from './ContactList/Contactlist';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';

export const App = () => {
  // const visibleContacts = () => {
  //   return contacts.filter(item => {
  //     if (filter.trim() === '') {
  //       return contacts;
  //     }
  //     console.log(contacts);
  //     return item.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  // const deleteContact = contactId => {
  //   dispatch(onDeleteDevice(contactId));
  // };

  // const addContact = newContact => {
  //   const hasContact = contacts.some(
  //     ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   if (hasContact) {
  //     alert(`${newContact.name} is already in contacts`);
  //     return;
  //   }
  //   const finalContact = {
  //     ...newContact,
  //     id: nanoid(),
  //   };
  //   dispatch(onAddContact(finalContact));
  // };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contactlist />
    </Layout>
  );
};
