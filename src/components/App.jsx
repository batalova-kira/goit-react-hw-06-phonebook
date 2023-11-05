import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import Contactlist from './ContactList/Contactlist';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import {
  onAddContact,
  onChangeFilter,
  onDeleteDevice,
  selectContacts,
  selectFilter,
} from 'redux/contactsSlice';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   }
//   return '';
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts);
  // const [filter, setFilter] = useState('');
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const changeFilter = newFilter => {
    dispatch(onChangeFilter(newFilter));
  };

  const visibleContacts = () => {
    return contacts.filter(item => {
      if (filter.trim() === '') {
        return contacts;
      }
      console.log(contacts);
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const deleteContact = contactId => {
    dispatch(onDeleteDevice(contactId));
  };

  const addContact = newContact => {
    const hasContact = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };
    dispatch(onAddContact(finalContact));
  };

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={changeFilter} />
      <Contactlist items={visibleContacts()} onDelete={deleteContact} />
    </Layout>
  );
};
