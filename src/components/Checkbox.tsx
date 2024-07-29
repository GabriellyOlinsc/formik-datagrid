import { useField } from "formik";

interface CheckboxProps {
  name: string;
  children: any
}
export default function Checkbox({ children, ...props }: CheckboxProps) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
