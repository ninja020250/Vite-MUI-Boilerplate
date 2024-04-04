import { Container as MuiContainer, ContainerProps as MuiContainerProps } from "@mui/material";

export type ContainerProps = {
  children: React.ReactNode;
} & MuiContainerProps;

export const Container = ({ children, maxWidth = "lg", ...rest }: ContainerProps) => {
  return (
    <MuiContainer maxWidth={maxWidth} {...rest}>
      {children}
    </MuiContainer>
  );
};

export default Container;
