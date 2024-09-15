import { DialogActions, DialogActionsProps, Stack, StackProps, styled, SxProps } from '@mui/material'

export const DialogHeaderBasic = styled(Stack, {
  shouldForwardProp: prop => prop !== 'isFullScreen',
})<StackProps>(() => ({}))

export const DialogHeaderFilled = styled(Stack, {
  shouldForwardProp: prop => prop !== 'isFullScreen',
})<StackProps>(() => ({}))

export const closeButton: SxProps = {
  position: 'absolute',
  padding: 2,
  right: 0,
  top: 2,
}

export const DialogActionStyled = styled(DialogActions)<DialogActionsProps>(({ theme }) => ({
  padding: theme.spacing(1),
  borderTop: `1px solid ${theme.palette.divider}`,
}))
