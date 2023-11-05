import React from 'react';
import { BtnClose, CardWrapper, Info } from './ContactCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onDeleteDevice, selectContacts } from 'redux/contactsSlice';

const ContactCard = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  console.log(contacts);
  return (
    <CardWrapper>
      <Info>{contacts.name}</Info>
      <Info>{contacts.number}</Info>
      <BtnClose onClick={() => dispatch(onDeleteDevice(contacts.id))}>
        Delete
      </BtnClose>
    </CardWrapper>
  );
};

export default ContactCard;
