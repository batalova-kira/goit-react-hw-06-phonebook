import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { ErrMessage, Input, StyledForm } from './ContactForm.styled';
import { BtnClose } from 'components/ContactCard/ContactCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onAddContact, selectContacts } from 'redux/contactsSlice';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required!'),
  number: Yup.string().min(8, 'Too Short!').required('This field is required!'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

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
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm({
          values: {
            name: '',
            number: '',
          },
        });
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <Input name="name" placeholder="Please enter your name" />
        <ErrMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Input
          name="number"
          placeholder="Please enter your number"
          type="text"
        />
        <ErrMessage name="number" component="div" />

        <BtnClose type="submit">Add contact</BtnClose>
      </StyledForm>
    </Formik>
  );
};
