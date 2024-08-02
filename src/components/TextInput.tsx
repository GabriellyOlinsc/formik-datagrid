import {
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { SxProps, TextFieldVariants } from "@mui/material";
import { useField } from "formik";
import { useState } from "react";

interface TextInputProps {
  id?: string;
  sx?: SxProps;
  removeUnderline?: boolean;
  variant?: TextFieldVariants;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  suffix?: string;
}

export default function TextInput(props: TextInputProps) {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const fieldProps={
    endAdornment:
      props.type === "password" ? (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            edge="end"
          >
            {showPassword ? (
              <VisibilityOff color="inherit" />
            ) : (
              <Visibility color="inherit" />
            )}
          </IconButton>
        </InputAdornment>
      ) : null,
  };

  return (
    <TextField
      id={props.id || props.name}
      variant={!props.variant ? "outlined" : props.variant}
      fullWidth
      {...field}
      {...props}
      sx={{ ...props.sx }}
      value={props.value || field.value}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ""}
      type={props.type === 'password' ? (showPassword ? 'text' : 'password') : props.type}
      InputProps={fieldProps}
    />
  );
}
