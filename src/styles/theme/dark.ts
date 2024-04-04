import { ThemeOptions, createTheme } from "@mui/material/styles";
import components from "./components";

export const darkThemeDefault: ThemeOptions = {
  palette: {
    mode: "dark",
  },
  components,
};

export default createTheme(darkThemeDefault);
