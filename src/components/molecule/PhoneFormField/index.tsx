import { InputNumberField } from '@components/atom/InputNumberField'
import { TextFieldProps } from '@components/atom/TextField'
import { FormControl, InputAdornment, InputLabelProps, InputProps } from '@mui/material'
import { Controller, ControllerProps } from 'react-hook-form'

export type PhoneFormFieldProps = {
  name: string
  label?: string
  hint?: string
  textFieldProps?: TextFieldProps
  inputLabelProps?: InputLabelProps
  InputProps?: InputProps
} & Omit<ControllerProps, 'render'>

const PhoneFormField = ({ label, textFieldProps = {}, InputProps = {}, inputLabelProps = {}, ...rest }: PhoneFormFieldProps) => {
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
              InputProps={{
                startAdornment: <InputAdornment position="start">Icon Phone</InputAdornment>,
                ...InputProps,
              }}
              {...textFieldProps}
            />
          </FormControl>
        )
      }}
    />
  )
}

export default PhoneFormField
