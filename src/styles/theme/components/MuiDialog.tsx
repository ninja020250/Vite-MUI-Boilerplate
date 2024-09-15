import { ComponentsOverrides, Theme } from '@mui/material'

const MuiDialog: {
  styleOverrides: ComponentsOverrides<Theme>['MuiDialog']
} = {
  styleOverrides: {
    root: () => ({
      '.MuiPaper-root': {},
    }),
  },
}

export default MuiDialog
