import CloseIcon from '@mui/icons-material/Close'
import { IconButton } from '@mui/material'
import Typography, { TypographyProps } from '../Typography'
import { DialogHeaderBasic, DialogHeaderFilled, closeButton } from './Dialog.styles'

export const HeaderVariants = {
  basic: DialogHeaderBasic,
  contained: DialogHeaderFilled,
}

export type DialogHeaderProps = {
  children: React.ReactNode
  variant?: keyof typeof HeaderVariants
  titleProps?: TypographyProps
  onClose?: any
}

const DialogHeader = ({ onClose, titleProps = {}, variant = 'contained', children }: DialogHeaderProps) => {
  const Header = HeaderVariants[variant]

  return (
    <Header>
      <Typography {...titleProps}>{children}</Typography>
      <IconButton className="btn-close" disableRipple aria-label="close" onClick={onClose} sx={closeButton}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Header>
  )
}

export default DialogHeader
