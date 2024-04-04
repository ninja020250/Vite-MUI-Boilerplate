import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";

export type BoxProps = {
  children?: React.ReactNode;
} & MuiBoxProps;

const Box = ({ children, ...rest }: BoxProps) => {
  return <MuiBox {...rest}>{children}</MuiBox>;
};

export default Box;
