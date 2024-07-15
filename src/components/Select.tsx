import styled from '@emotion/styled'
import "../styles.css";
import "../styles-custom.css";
import { useField, FieldAttributes } from "formik";
import React from "react";


interface SelectProps extends FieldAttributes<any> {
  label: string;
  children: React.ReactNode; // Garante que 'children' seja passado corretamente
}


// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

export default function Select({ label, ...props }: SelectProps) {
  const [field, meta] = useField(props.name || ""); // Garantindo que 'name' seja passado como string
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} as="select">
        {props.children}
      </StyledSelect>
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
}



