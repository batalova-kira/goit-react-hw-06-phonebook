import ContactCard from 'components/ContactCard/ContactCard';
import React from 'react';
import { ContactItem, List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { onDeleteDevice } from 'redux/contactsSlice';

const Contactlist = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {items.map(item => (
        <ContactItem key={item.id}>
          <ContactCard
            contact={item}
            onDelete={dispatch(onDeleteDevice(item.id))}
          />
        </ContactItem>
      ))}
    </List>
  );
};

export default Contactlist;
