import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from '@mui/material'

export type DialogProps = {
  children: React.ReactNode
} & MuiDialogProps

export const Dialog = ({ children, maxWidth = 'lg', ...rest }: DialogProps) => {
  return <MuiDialog {...rest}>{children}</MuiDialog>
}

export default Dialog
