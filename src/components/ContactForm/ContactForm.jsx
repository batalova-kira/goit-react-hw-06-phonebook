import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrMessage, Input, StyledForm } from './ContactForm.styled';
import { BtnClose } from 'components/ContactCard/ContactCard.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required!'),
  number: Yup.string().min(8, 'Too Short!').required('This field is required!'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
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
