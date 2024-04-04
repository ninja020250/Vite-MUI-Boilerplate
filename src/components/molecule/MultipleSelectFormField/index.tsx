import { MultipleSelect, MultipleSelectProps } from "@components/atom/MultipleSelect";
import { FormControl, FormHelperText, InputLabel, Stack } from "@mui/material";
import { Controller, ControllerProps } from "react-hook-form";
import _ from "lodash";

export type MultipleSelectFormFieldProps = {
  name: string;
  id: string;
  label?: string;
  selectProps?: Omit<MultipleSelectProps, "id">;
  children?: React.ReactNode;
  options: any[];
  valueFieldName?: string;
  labelFieldName?: string;
} & Omit<ControllerProps, "render">;

const MultipleSelectFormField = ({
  id,
  label,
  selectProps = {},
  children,
  options,
  valueFieldName = "id",
  labelFieldName = "name",
  ...rest
}: MultipleSelectFormFieldProps) => {
  const handleRemoveItem = (values: any, item: any, onChange: any) => {
    const newItems = [...values];
    const indexToRemove =
      typeof item === "string"
        ? values.findIndex((x: any) => x === item)
        : _.findIndex(values, {
            [valueFieldName]: item[valueFieldName],
          });
    if (indexToRemove >= 0) {
      newItems.splice(indexToRemove, 1);
    }
    onChange(newItems);
  };

  return (
    <Controller
      {...rest}
      render={({ field, fieldState: { error, invalid } }) => {
        return (
          <FormControl fullWidth error={invalid}>
            <MultipleSelect
              {...field}
              label={label}
              id={id}
              error={invalid}
              options={options}
              valueFieldName={valueFieldName}
              labelFieldName={labelFieldName}
              onRemoveItem={(item) => {
                handleRemoveItem(field.value, item, field.onChange);
              }}
              {...selectProps}
            >
              {children}
            </MultipleSelect>
            <FormHelperText>{error ? error.message : null}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
};

export default MultipleSelectFormField;
