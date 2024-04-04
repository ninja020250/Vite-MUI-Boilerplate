import InputNumberField from "@components/atom/InputNumberField";
import { TextFieldProps } from "@components/atom/TextField";
import { FormControl, InputLabel, InputLabelProps, Stack } from "@mui/material";
import { Controller, ControllerProps } from "react-hook-form";

export type InputNumberFormFieldProps = {
  name: string;
  label?: string;
  inputLabelProps?: InputLabelProps;
  textFieldProps?: TextFieldProps;
} & Omit<ControllerProps, "render">;

const InputNumberFormField = ({
  label,
  textFieldProps = {},
  inputLabelProps = {},
  ...rest
}: InputNumberFormFieldProps) => {
  return (
    <Controller
      {...rest}
      render={({ field, fieldState: { error, invalid } }) => {
        return (
          <FormControl fullWidth error={invalid}>
            <InputNumberField
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

export default InputNumberFormField;
