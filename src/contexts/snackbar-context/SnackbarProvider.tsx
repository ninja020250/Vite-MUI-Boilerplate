import { SnackbarProvider as LibSnackbarProvider } from 'notistack'
import React from 'react'

const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const notistackRef = React.createRef<LibSnackbarProvider>()

  return (
    <LibSnackbarProvider
      maxSnack={3}
      ref={notistackRef}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      {children}
    </LibSnackbarProvider>
  )
}

export default SnackbarProvider
