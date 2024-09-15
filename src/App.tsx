import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { useMemo } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from '@utils/queryClient'

import router from './configs/routes.config'
import { AppLoadingProvider } from './contexts/AppLoading'
import ColorModeProvider from './hooks/useColorMode/ColorModeProvider'
import useColorMode from './hooks/useColorMode/useColorMode'
import darkTheme from './styles/theme/dark'
import lightTheme from './styles/theme/light'

function App({ ...props }) {
  const { colorMode } = useColorMode()

  const theme = useMemo(() => (colorMode === 'dark' ? darkTheme : lightTheme), [colorMode])

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppLoadingProvider>
            <CssBaseline />
            <RouterProvider router={router} {...props} />
          </AppLoadingProvider>
        </ThemeProvider>
      </QueryClientProvider>
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
