import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

export type ButtonProps = {
  children?: React.ReactNode;
} & MuiButtonProps;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
