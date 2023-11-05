import React from 'react';
import { BtnClose, CardWrapper, Info } from './ContactCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onDeleteDevice, selectContacts } from 'redux/contactsSlice';

const ContactCard = ({ contact: { name, number, id } }) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  console.log(contacts);
  return (
    <CardWrapper>
      <Info>{name}</Info>
      <Info>{number}</Info>
      <BtnClose onClick={() => dispatch(onDeleteDevice(id))}>Delete</BtnClose>
    </CardWrapper>
  );
};

export default ContactCard;
