import TextField, { TextFieldProps } from "@components/atom/TextField";
import { FormControl, InputLabel, InputLabelProps, Stack } from "@mui/material";
import { Controller, ControllerProps } from "react-hook-form";

export type TextFormFieldProps = {
  name: string;
  label?: string;
  hint?: string;
  textFieldProps?: TextFieldProps;
  inputLabelProps?: InputLabelProps;
} & Omit<ControllerProps, "render">;

const TextFormField = ({ label, textFieldProps = {}, inputLabelProps = {}, ...rest }: TextFormFieldProps) => {
  return (
    <Controller
      {...rest}
      render={({ field, fieldState: { error, invalid } }) => {
        return (
          <FormControl fullWidth error={invalid}>
            <TextField
              {...field}
              label={label}
              helperText={error ? error.message : null}
              error={invalid}
              {...textFieldProps}
            />
          </FormControl>
        );
      }}
    />
  );
};

export default TextFormField;
