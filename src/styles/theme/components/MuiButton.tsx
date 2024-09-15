import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material'

const MuiButton: {
  defaultProps: ComponentsProps['MuiButton']
  styleOverrides: ComponentsOverrides<Theme>['MuiButton']
} = {
  defaultProps: {
    variant: 'contained',
    color: 'primary',
  },
  styleOverrides: {
    root: () => ({
      textTransform: 'none',
    }),
  },
}

export default MuiButton
