import React from 'react'
import { DialogTitle as MuiDialogTitle, DialogTitleProps as MuiDialogTitleProps } from '@mui/material'

export type DialogTitleProps = {} & MuiDialogTitleProps

const DialogTitle: React.FC<DialogTitleProps> = ({ children, ...rest }) => {
  return <MuiDialogTitle {...rest}>{children}</MuiDialogTitle>
}

export default DialogTitle
