import styled from "styled-components";
import { Form, ErrorMessage, Field } from "formik";

export const StyledForm = styled(Form)`
display: flex;
flex-direction: column;
gap: ${p => p.theme.spacing(2)};
padding: ${p => p.theme.spacing(3)};
`;

export const ErrMessage = styled(ErrorMessage)`
color: ${p => p.theme.colors.red};
`

export const Input = styled(Field)`
max-width: 380px;
font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  border:none;
  border-bottom: 1px solid ${p => p.theme.colors.teal};

  &:focus, &:hover, &:active	{ 
    outline: 0;
    outline-offset: 0;
    border:none;
  border-bottom: 2px solid ${p => p.theme.colors.teal} }
`