import { ReactNode, useContext, useState, createContext } from 'react'

export type LoadingState = {
  tasks?: boolean
  observation?: boolean
  annotation?: boolean
  reviews?: boolean
} & Record<string, boolean>

interface AppLoadingContextType {
  loading: LoadingState
  setLoading: React.Dispatch<React.SetStateAction<LoadingState>>
}

interface AppLoadingProviderProps {
  children: ReactNode
}

const AppLoadingContext = createContext<AppLoadingContextType | null>(null)

const AppLoadingProvider: React.FC<AppLoadingProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState<LoadingState>({})

  return <AppLoadingContext.Provider value={{ loading, setLoading }}>{children}</AppLoadingContext.Provider>
}

const useAppLoadingContext = (): AppLoadingContextType => {
  const context = useContext(AppLoadingContext)

  if (!context) {
    throw new Error('useAppLoadingContext must be used within a AppLoadingProvider')
  }
  return context
}

export { AppLoadingProvider, useAppLoadingContext }
