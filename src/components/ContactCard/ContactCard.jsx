import React from 'react';
import { BtnClose, CardWrapper, Info } from './ContactCard.styled';

const ContactCard = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <CardWrapper>
      <Info>{name}</Info>
      <Info>{number}</Info>
      <BtnClose onClick={() => onDelete(id)}>Delete</BtnClose>
    </CardWrapper>
  );
};

export default ContactCard;
