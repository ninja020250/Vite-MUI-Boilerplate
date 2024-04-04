import { Box, MenuItem, Select as MuiSelect, SelectProps as MuiSelectProps, TextField, styled } from "@mui/material";
import _ from "lodash";
import { useRef, useState } from "react";
import { Typography } from "..";

export const SearchStyled = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover": {
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary,
      },
    },
    "&.Mui-focused": {
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary,
      },
    },
  },
}));

export type SelectProps = {
  id: string;
  allowSearch?: boolean;
  children?: React.ReactNode;
  valueFieldName?: string;
  labelFieldName?: string;
  options: any[];
} & MuiSelectProps;

export const Select = ({
  id,
  allowSearch = false,
  children,
  placeholder,
  labelFieldName = "name",
  options,
  ...rest
}: SelectProps) => {
  const searchRef = useRef<any>();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <MuiSelect
      id={id}
      labelId="id"
      multiple={false}
      displayEmpty
      onOpen={() => searchRef.current?.focus()}
      renderValue={(selected: any) => {
        const singleSelectPlaceholder = !selected && placeholder;
        const multipleSelectPlaceholder = !selected?.length && !!placeholder;

        if (singleSelectPlaceholder || multipleSelectPlaceholder) {
          return <Typography color="grey.400">{placeholder}</Typography>;
        }

        if (typeof selected === "string") {
          return selected;
        }

        return _.get(selected, labelFieldName);
      }}
      {...rest}
    >
      {placeholder && (
        <MenuItem sx={{ display: "none" }} value="">
          <em>{placeholder}</em>
        </MenuItem>
      )}
      {children}
      {allowSearch && (
        <Box p={1} width="100%">
          <SearchStyled
            sx={{
              width: "calc(100% - 16px)",
            }}
            autoFocus
            onKeyDown={(e) => {
              e.stopPropagation();
              return e;
            }}
            ref={searchRef}
            type="text"
            onChange={handleSearch}
          />
        </Box>
      )}
      {options
        ?.filter((option) => {
          if (typeof option === "string") {
            return option.toLowerCase().includes(searchValue.toLowerCase());
          }
          return option[labelFieldName].toLowerCase().includes(searchValue.toLowerCase());
        })
        .map((option) => {
          return <MenuItem value={option}>{option[labelFieldName]}</MenuItem>;
        })}
    </MuiSelect>
  );
};

export default Select;
