import { useField } from "formik";
import React from "react";

interface TextInputProps {
  id?:string
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export default function TextInput({ label, ...props }: TextInputProps){
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};