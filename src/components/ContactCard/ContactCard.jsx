import React from 'react';
import { BtnClose, CardWrapper, Info } from './ContactCard.styled';
import { useDispatch } from 'react-redux';
import { onDeleteDevice } from 'redux/contactsSlice';

const ContactCard = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <CardWrapper>
      <Info>{name}</Info>
      <Info>{number}</Info>
      <BtnClose onClick={() => dispatch(onDeleteDevice(id))}>Delete</BtnClose>
    </CardWrapper>
  );
};

export default ContactCard;
