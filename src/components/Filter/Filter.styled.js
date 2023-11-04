import styled from "styled-components";

export const InputFilter = styled.input`
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