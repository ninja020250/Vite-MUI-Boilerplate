import { Select } from '@components/atom/Select'
import { FormControl, FormHelperText, SelectProps } from '@mui/material'
import { Controller, ControllerProps } from 'react-hook-form'

export type SelectFormFieldProps = {
  name: string
  id: string
  label?: string
  selectProps?: SelectProps
  children?: React.ReactNode
  options: any[]
  valueFieldName?: string
  labelFieldName?: string
} & Omit<ControllerProps, 'render'>

const SelectFormField = ({
  id,
  label,
  selectProps = {},
  children,
  options,
  valueFieldName = 'id',
  labelFieldName = 'name',
  ...rest
}: SelectFormFieldProps) => {
  return (
    <Controller
      {...rest}
      render={({ field, fieldState: { error, invalid } }) => {
        return (
          <FormControl fullWidth error={invalid}>
            <Select
              label={label}
              valueFieldName={valueFieldName}
              labelFieldName={labelFieldName}
              {...field}
              id={id}
              options={options}
              {...selectProps}
            >
              {children}
            </Select>
            <FormHelperText>{error ? error.message : null}</FormHelperText>
          </FormControl>
        )
      }}
    />
  )
}

export default SelectFormField
