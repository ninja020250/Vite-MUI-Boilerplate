import { Checkbox, Chip, MenuItem, Select, SelectProps, Stack, Theme, useTheme } from "@mui/material";
import _ from "lodash";
import { useMemo } from "react";
import { Typography } from "..";

export type MultipleSelectProps = {
  id: string;
  children?: React.ReactNode;
  onRemoveItem?: (item: any) => void;
  valueFieldName?: string;
  labelFieldName?: string;
  options?: any[];
  showCheckbox?: boolean;
} & SelectProps;

function getStyles(isSelected: boolean, theme: Theme) {
  return {
    fontWeight: isSelected ? theme.typography.fontWeightBold : theme.typography.fontWeightRegular,
  };
}

export const MultipleSelect = ({
  id,
  children,
  placeholder,
  onRemoveItem,
  valueFieldName = "id",
  labelFieldName = "name",
  onChange,
  options,
  value,
  disabled,
  showCheckbox = true,
  ...rest
}: MultipleSelectProps) => {
  const theme = useTheme();
  const handleChange = (event: any, child?: any) => {
    const selectedValue = child?.props?.value;
    let newValues = [];
    const currentValue = (value as any) ?? [];
    if (typeof _.first(currentValue) === "string") {
      const isDelete = currentValue.some((item: any) => item === selectedValue);

      if (isDelete) {
        newValues = currentValue.filter((item: any) => item !== selectedValue);
      } else {
        newValues = [...currentValue, selectedValue];
      }

      event.target.value = newValues;
      onChange?.(event, child);
      return;
    }

    const isDelete = currentValue.some((item: any) => item[valueFieldName] === selectedValue[valueFieldName]);

    if (isDelete) {
      newValues = currentValue.filter((item: any) => item[valueFieldName] !== selectedValue[valueFieldName]);
    } else {
      newValues = [...currentValue, selectedValue];
    }
    event.target.value = newValues;
    onChange?.(event, child);
    return;
  };

  const _value = useMemo(() => {
    if (Array.isArray(value)) {
      return value ?? [];
    } else if (value) {
      return [value];
    } else {
      return [];
    }
  }, [value]);

  return (
    <Select
      id={id}
      labelId="id"
      multiple
      disabled={disabled}
      displayEmpty
      onMouseDown={(event) => {
        event.stopPropagation();
      }}
      MenuProps={{
        slotProps: {
          paper: {
            style: {
              marginTop: "8px",
              borderRadius: "16px",
            },
          },
        },
      }}
      onChange={handleChange}
      value={value}
      renderValue={(selected: any) => {
        const singleSelectPlaceholder = !selected && placeholder;
        const multipleSelectPlaceholder = !selected?.length && !!placeholder;

        if (singleSelectPlaceholder || multipleSelectPlaceholder) {
          return <Typography color="grey.400">{placeholder}</Typography>;
        }

        return (
          <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1}>
            {(selected ?? []).map((item: any) => {
              const label = typeof item === "string" ? item : item[labelFieldName];
              return (
                <Chip
                  sx={{
                    zIndex: 10,
                    borderRadius: "12px",
                  }}
                  key={label}
                  label={label}
                  onDelete={() => {
                    onRemoveItem?.(item);
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                  }}
                  deleteIcon={disabled ? <div /> : <div>X</div>}
                >
                  {label}
                </Chip>
              );
            })}
          </Stack>
        );
      }}
      {...rest}
    >
      {placeholder && (
        <MenuItem sx={{ display: "none" }} value="">
          <em>{placeholder}</em>
        </MenuItem>
      )}
      {children}
      {(options ?? []).map((option: any) => {
        if (typeof option === "string") {
          return (
            <MenuItem
              key={option}
              value={option}
              sx={getStyles(
                _value.some((s) => option === s),
                theme
              )}
            >
              {showCheckbox && <Checkbox checked={((value as any[]) || []).indexOf(option) > -1} />}
              {option}
            </MenuItem>
          );
        }

        return (
          <MenuItem
            key={option[valueFieldName]}
            value={option}
            sx={getStyles(
              _value.some((s) => option[valueFieldName] === s[valueFieldName]),
              theme
            )}
          >
            {showCheckbox && (
              <Checkbox
                checked={
                  _.findIndex(value as any[], {
                    [valueFieldName]: option[valueFieldName],
                  }) > -1
                }
              />
            )}
            {option[labelFieldName]}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default MultipleSelect;
