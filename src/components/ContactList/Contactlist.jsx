import ContactCard from 'components/ContactCard/ContactCard';
import React from 'react';
import { ContactItem, List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contactsSlice';

const Contactlist = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = () => {
    return contacts.filter(item => {
      if (filter.trim() === '') {
        return contacts;
      }
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
  };
  const resultContacts = visibleContacts();

  return (
    <List>
      {resultContacts.map(item => (
        <ContactItem key={item.id}>
          <ContactCard contact={item} />
        </ContactItem>
      ))}
    </List>
  );
};

export default Contactlist;
