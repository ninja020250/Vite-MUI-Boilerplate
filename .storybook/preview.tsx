import { ThemeProvider } from '@emotion/react'
import React from 'react'
import light from '../src/styles/theme/light'
import ColorModeProvider from '../src/hooks/useColorMode/ColorModeProvider'
import '../i18n'
import { CssBaseline } from '@mui/material'

const withThemeProvider = (Story, context) => {
  return (
    <ColorModeProvider defaultTheme="light">
      <ThemeProvider theme={light}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
    </ColorModeProvider>
  )
}

export const decorators = [withThemeProvider]
