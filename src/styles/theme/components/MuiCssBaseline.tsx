import { ComponentsOverrides, Theme } from "@mui/material";

const MuiCssBaseline: {
  styleOverrides: ComponentsOverrides<Theme>["MuiCssBaseline"];
} = {
  styleOverrides: `
  #root {
    min-width: 100vw;
    scrollbar-gutter: stable;
  }
  body::-webkit-scrollbar {
    display: none;
  }
    `,
};

export default MuiCssBaseline;
