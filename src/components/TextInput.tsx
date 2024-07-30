import { TextField } from "@material-ui/core";
import { useField } from "formik";

interface TextInputProps {
  id?: string
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string
}

export default function TextInput({ label, type, ...props }: TextInputProps) {
  const [field, meta] = useField(props.name);

  return (
    <TextField
      id={props.id || props.name}
      label={label}
      type={type}
      variant="filled" // Alterado para o estilo "filled"
      fullWidth
      {...field}
      {...props}
      value={props.value || field.value}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ''}
    />
  );
};