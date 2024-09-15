import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material'

const MuiCard: {
  defaultProps: ComponentsProps['MuiCard']
  styleOverrides: ComponentsOverrides<Theme>['MuiCard']
} = {
  defaultProps: {
    variant: 'outlined',
  },
  styleOverrides: {},
}

export default MuiCard
