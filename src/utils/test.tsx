import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@styles/theme/light'
import { ReactNode } from 'react'

const AllTheProviders = ({ children }: any) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const renderWithProviders = (ui: ReactNode) => {
  const tree = render(<AllTheProviders>{ui}</AllTheProviders>)
  return tree
}

export * from '@testing-library/react'

export { renderWithProviders }
