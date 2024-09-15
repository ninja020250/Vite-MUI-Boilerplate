import { ComponentsOverrides, ComponentsProps, Theme } from '@mui/material'

const MuiInputLabel: {
  defaultProps: ComponentsProps['MuiInputLabel']
  styleOverrides: ComponentsOverrides<Theme>['MuiInputLabel']
} = {
  defaultProps: {},
  styleOverrides: {
    root: () => ({
      transform: 'none',
      position: 'relative',
      fontWeight: 500,
      fontSize: '12px',
      marginBottom: '4px',
    }),
  },
}

export default MuiInputLabel
