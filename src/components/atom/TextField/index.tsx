import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { forwardRef } from "react";

export type TextFieldProps = {
  children?: React.ReactNode;
} & MuiTextFieldProps;

export const TextField = ({ children, ...rest }: TextFieldProps, ref: React.Ref<any>) => {
  return (
    <MuiTextField {...rest} label={null} ref={ref}>
      {children}
    </MuiTextField>
  );
};

export default forwardRef(TextField);
