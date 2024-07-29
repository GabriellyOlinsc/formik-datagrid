import { useField } from "formik";

interface TextInputProps {
  id?:string
  label: string;
  name: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  value?: string
}

export default function TextInput({ label, ...props }: TextInputProps){
  const [field, meta] = useField(props.name);
  
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props}  value={props.value ? props.value : field.value} className={`text-input ${meta.touched && meta.error ? 'is-invalid' : ''}`}/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};