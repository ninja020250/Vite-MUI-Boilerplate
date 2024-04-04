import { useMemo } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { RouterProvider } from 'react-router-dom'

import router from './configs/routes.config'
import ColorModeProvider from './hooks/useColorMode/ColorModeProvider'
import useColorMode from './hooks/useColorMode/useColorMode'
import darkTheme from './styles/theme/dark'
import lightTheme from './styles/theme/light'

function App({ ...props }) {
  const { colorMode } = useColorMode()

  const theme = useMemo(() => (colorMode === 'dark' ? darkTheme : lightTheme), [colorMode])

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} {...props} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

const AppWrapper = (props: any) => {
  return (
    <ColorModeProvider defaultTheme="light">
      <App {...props} />
    </ColorModeProvider>
  )
}

export default AppWrapper
