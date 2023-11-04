import ContactCard from 'components/ContactCard/ContactCard';
import React from 'react';
import { ContactItem, List } from './ContactList.styled';

const Contactlist = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ContactItem key={item.id}>
          <ContactCard contact={item} onDelete={onDelete} />
        </ContactItem>
      ))}
    </List>
  );
};

export default Contactlist;
