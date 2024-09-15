import { Stack as MuiStack, StackProps as MuiStackProps } from "@mui/material";

export type VStackProps = {
  children?: React.ReactNode;
} & MuiStackProps;

const VStack = ({ children, direction = "column", ...rest }: VStackProps) => {
  return (
    <MuiStack direction={direction} {...rest}>
      {children}
    </MuiStack>
  );
};

export default VStack;
