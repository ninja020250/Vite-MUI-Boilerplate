import { DialogActionsProps as MuiDialogActionsProps } from '@mui/material/DialogActions'
import React from 'react'
import Button, { ButtonProps } from '../Button'
import { DialogActionStyled } from './Dialog.styles'
import Stack from '../Stack'

export type DialogActionsProps = {
  buttons: ButtonProps[]
} & MuiDialogActionsProps

const DialogActions: React.FC<DialogActionsProps> = ({ children, buttons, ...rest }) => {
  return (
    <DialogActionStyled {...rest}>
      {buttons ? (
        <Stack spacing={1} direction="row" width="100%" justifyContent="end">
          {buttons.map((buttonProps, index) => (
            <Button {...buttonProps} key={index} />
          ))}
        </Stack>
      ) : (
        children
      )}
    </DialogActionStyled>
  )
}

export default DialogActions
