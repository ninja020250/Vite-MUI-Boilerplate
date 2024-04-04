import { Stack as MuiStack, StackProps as MuiStackProps } from "@mui/material";

export type StackProps = {
  children?: React.ReactNode;
} & MuiStackProps;

const Stack = ({ children, direction = "row", ...rest }: StackProps) => {
  return (
    <MuiStack direction={direction} {...rest}>
      {children}
    </MuiStack>
  );
};

export default Stack;
