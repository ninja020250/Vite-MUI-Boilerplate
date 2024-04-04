import { Theme } from "@mui/material";
import { Components } from "@mui/material/styles/components";
import MuiButton from "./MuiButton";
import MuiCssBaseline from "./MuiCssBaseline";

const components: Components<Omit<Theme, "components">> = {
  MuiButton,
  MuiCssBaseline,
};

export default components;
