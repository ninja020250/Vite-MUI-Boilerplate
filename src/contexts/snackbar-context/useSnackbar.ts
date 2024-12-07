import { useSnackbar as useLibSnackbar } from 'notistack'

export const useSnackbar = () => {
  const { enqueueSnackbar } = useLibSnackbar()

  const enqueueErrorSnackbar = (message: string) => {
    enqueueSnackbar(message, { variant: 'error', autoHideDuration: 3000 })
  }

  const enqueueSuccessSnackbar = (message: string) => {
    enqueueSnackbar(message, { variant: 'success', autoHideDuration: 2000 })
  }

  const enqueueWarningSnackbar = (message: string) => {
    enqueueSnackbar(message, { variant: 'warning', autoHideDuration: 2000 })
  }

  return {
    enqueueSnackbar,
    enqueueErrorSnackbar,
    enqueueSuccessSnackbar,
    enqueueWarningSnackbar,
  }
}

export default useSnackbar
