import { ComponentsOverrides, ComponentsProps, Theme } from "@mui/material";

const MuiContainer: {
  defaultProps: ComponentsProps["MuiContainer"];
  styleOverrides: ComponentsOverrides<Theme>["MuiContainer"];
} = {
  defaultProps: {},
  styleOverrides: {
    root: () => ({}),
  },
};

export default MuiContainer;
