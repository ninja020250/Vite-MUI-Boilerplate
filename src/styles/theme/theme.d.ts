// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createTheme, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {}

  interface Palette {
    // TODO: add new color type here
  }

  interface PaletteOptions {
    // TODO: add new color type here
  }

  interface TypographyVariants {}

  interface TypographyVariantsOptions {}
}
