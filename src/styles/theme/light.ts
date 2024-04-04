import { ThemeOptions, createTheme } from "@mui/material/styles";
import components from "./components";

export const lightThemeDefault: ThemeOptions = {
  palette: {
    mode: "light",
  },
  components,
};

export default createTheme(lightThemeDefault);
