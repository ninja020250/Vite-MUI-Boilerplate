import React from 'react'
import { DialogContent as MuiDialogContent, DialogContentProps as MuiDialogContentProps } from '@mui/material'

export type DialogContentProps = {} & MuiDialogContentProps & MuiDialogContentProps

const DialogContent: React.FC<DialogContentProps> = ({ children, ...rest }) => {
  return <MuiDialogContent {...rest}>{children}</MuiDialogContent>
}

export default DialogContent
