import { Typography as TypographyLib, TypographyProps as TypographyLibProps } from "@mui/material";
import { forwardRef } from "react";

export type TypographyProps = {
  children?: React.ReactNode;
} & TypographyLibProps;

const Typography = ({ children, ...rest }: TypographyProps, ref: React.Ref<any>) => {
  return (
    <TypographyLib ref={ref} {...rest}>
      {children}
    </TypographyLib>
  );
};

export default forwardRef(Typography);
