import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { useMemo } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router'

import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@utils/queryClient'

import router from './configs/routes.config'
import { AppLoadingProvider } from './contexts/AppLoading'
import ColorModeProvider from './hooks/useColorMode/ColorModeProvider'
import useColorMode from './hooks/useColorMode/useColorMode'
import darkTheme from './styles/theme/dark'
import lightTheme from './styles/theme/light'
import { SnackbarProvider } from './contexts/snackbar-context'

function App({ ...props }) {
  const { colorMode } = useColorMode()

  const theme = useMemo(() => (colorMode === 'dark' ? darkTheme : lightTheme), [colorMode])

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <QueryClientProvider client={queryClient}>
            <AppLoadingProvider>
              <CssBaseline />
              <RouterProvider router={router} {...props} />
            </AppLoadingProvider>
          </QueryClientProvider>
        </SnackbarProvider>
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
